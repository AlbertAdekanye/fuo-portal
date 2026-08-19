"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  GraduationCap,
  MapPin,
  UserRound,
} from "lucide-react";
import { useForm, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { admissionSchema, type AdmissionFormData } from "@/schemas/admission";

import { faculties, programmes } from "@/config/university";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const steps = [
  {
    title: "Personal",
    icon: UserRound,
  },
  {
    title: "Contact",
    icon: MapPin,
  },
  {
    title: "Programme",
    icon: GraduationCap,
  },
  {
    title: "Review",
    icon: Check,
  },
];

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const {
    register,
    watch,
    trigger,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),

    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      state: "",
      localGovernment: "",
      programme: "",
      faculty: "",
      department: "",
      passportUrl: "",
    },
  });

  const formData = watch();

  const selectedFacultyName = watch("faculty");

  const selectedFaculty = useMemo(
    () => faculties.find((faculty) => faculty.name === selectedFacultyName),
    [selectedFacultyName],
  );

  useEffect(() => {
    setValue("department", "");
  }, [selectedFacultyName, setValue]);
  async function nextStep() {
    let fields: (keyof AdmissionFormData)[] = [];

    if (currentStep === 0) {
      fields = ["firstName", "lastName", "dateOfBirth", "gender"];
    }

    if (currentStep === 1) {
      fields = ["email", "phone", "state", "localGovernment"];
    }

    if (currentStep === 2) {
      fields = ["programme", "faculty", "department"];
    }

    const valid = await trigger(fields);

    if (!valid) {
      return;
    }

    setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
  }

  function previousStep() {
    setCurrentStep((step) => Math.max(step - 1, 0));
  }

  async function onSubmit(data: AdmissionFormData) {
    console.log("FUO APPLICATION:", data);

    // Supabase submission comes next.
  }

  function onInvalid(errors: FieldErrors<AdmissionFormData>) {
    console.log(errors);
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border bg-background shadow-sm">
      <div className="border-b p-5 sm:p-7">
        <div className="grid grid-cols-4 gap-2">
          {steps.map((step, index) => {
            const Icon = step.icon;

            const active = index === currentStep;

            const completed = index < currentStep;

            return (
              <div
                key={step.title}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={[
                    "flex size-10 items-center justify-center rounded-full border transition-colors",
                    active ? "bg-foreground text-background" : "",
                    completed ? "bg-primary text-primary-foreground" : "",
                  ].join(" ")}
                >
                  {completed ? (
                    <Check className="size-4" />
                  ) : (
                    <Icon className="size-4" />
                  )}
                </div>

                <span className="mt-2 hidden text-xs font-medium text-muted-foreground sm:block">
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div className="min-h-[460px] p-5 sm:p-8">
          {currentStep === 0 && (
            <PersonalStep register={register} errors={errors} />
          )}

          {currentStep === 1 && (
            <ContactStep register={register} errors={errors} />
          )}

          {currentStep === 2 && (
            <AcademicStep
              register={register}
              errors={errors}
              selectedFaculty={selectedFaculty}
            />
          )}

          {currentStep === 3 && <ReviewStep data={formData} />}
        </div>

        <div className="flex items-center justify-between border-t p-5 sm:px-8">
          <Button
            type="button"
            variant="outline"
            disabled={currentStep === 0}
            onClick={previousStep}
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={nextStep}>
              Continue
              <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

type StepProps = {
  register: ReturnType<typeof useForm<AdmissionFormData>>["register"];

  errors: FieldErrors<AdmissionFormData>;
};

function PersonalStep({ register, errors }: StepProps) {
  return (
    <div>
      <StepHeading
        title="Personal information"
        description="Tell FUO who is attempting to gain admission."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field label="First Name" error={errors.firstName?.message}>
          <Input placeholder="" {...register("firstName")} />
        </Field>

        <Field label="Middle Name" error={errors.middleName?.message}>
          <Input placeholder="Optional" {...register("middleName")} />
        </Field>

        <Field label="Last Name" error={errors.lastName?.message}>
          <Input placeholder="" {...register("lastName")} />
        </Field>

        <Field label="Date of Birth" error={errors.dateOfBirth?.message}>
          <Input type="date" {...register("dateOfBirth")} />
        </Field>

        <Field label="Gender" error={errors.gender?.message}>
          <select
            {...register("gender")}
            className="h-10 w-full rounded-md border bg-background px-3 text-sm"
            defaultValue=""
          >
            <option value="" disabled>
              Select gender
            </option>

            <option value="male">Male</option>

            <option value="female">Female</option>

            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </Field>
      </div>
    </div>
  );
}

function ContactStep({ register, errors }: StepProps) {
  return (
    <div>
      <StepHeading
        title="Contact & location"
        description="We need somewhere to send the good news."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field label="Email Address" error={errors.email?.message}>
          <Input type="email" placeholder="" {...register("email")} />
        </Field>

        <Field label="Phone Number" error={errors.phone?.message}>
          <Input placeholder="+234..." {...register("phone")} />
        </Field>

        <Field label="State" error={errors.state?.message}>
          <Input placeholder="" {...register("state")} />
        </Field>

        <Field label="Local Government" error={errors.localGovernment?.message}>
          <Input
            placeholder="Local government"
            {...register("localGovernment")}
          />
        </Field>
      </div>
    </div>
  );
}

function AcademicStep({
  register,
  errors,
  selectedFaculty,
}: StepProps & {
  selectedFaculty: (typeof faculties)[number] | undefined;
}) {
  return (
    <div>
      <StepHeading
        title="Academic choice"
        description="Now choose what you actually came to FUO to study."
      />

      <div className="mt-8 space-y-6">
        {/* Programme */}
        <Field label="Programme" error={errors.programme?.message}>
          <select
            {...register("programme")}
            className="h-10 w-full rounded-md border bg-background px-3 text-sm"
          >
            <option value="">Select programme</option>

            {programmes.map((programme) => (
              <option key={programme} value={programme}>
                {programme}
              </option>
            ))}
          </select>
        </Field>

        {/* Faculty */}
        <Field label="Faculty" error={errors.faculty?.message}>
          <select
            {...register("faculty")}
            className="h-10 w-full rounded-md border bg-background px-3 text-sm"
          >
            <option value="">Select faculty</option>

            {faculties.map((faculty) => (
              <option key={faculty.name} value={faculty.name}>
                {faculty.name}
              </option>
            ))}
          </select>
        </Field>

        {/* Department */}
        <Field label="Department" error={errors.department?.message}>
          <select
            {...register("department")}
            disabled={!selectedFaculty}
            className="h-10 w-full rounded-md border bg-background px-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">
              {selectedFaculty ? "Select department" : "Select faculty first"}
            </option>

            {selectedFaculty?.departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </Field>
      </div>
    </div>
  );
}

function ReviewStep({ data }: { data: AdmissionFormData }) {
  const faculty = faculties.find((item) => item.id === data.faculty);

  return (
    <div>
      <StepHeading
        title="Review application"
        description="Check everything before submitting. Even FUO cannot read your mind."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <ReviewItem
          label="Name"
          value={[data.firstName, data.middleName, data.lastName]
            .filter(Boolean)
            .join(" ")}
        />

        <ReviewItem label="Email" value={data.email} />

        <ReviewItem label="Phone" value={data.phone} />

        <ReviewItem label="State" value={data.state} />

        <ReviewItem label="Programme" value={data.programme} />

        <ReviewItem label="Faculty" value={faculty?.name ?? ""} />

        <ReviewItem label="Department" value={data.department} />
      </div>

      <div className="mt-8 rounded-2xl border bg-muted/40 p-5">
        <p className="text-sm font-semibold">Declaration</p>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          By submitting this application, you confirm that the information
          provided is accurate to the best of your knowledge and that you are
          emotionally prepared for the FUO entrance examination.
        </p>
      </div>
    </div>
  );
}

function StepHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h2 className="text-2xl font-black">{title}</h2>

      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      {children}

      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ReviewItem({ label, value }: { label: string; value?: string }) {
  return (
    <div className="rounded-2xl border p-4">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </p>

      <p className="mt-2 font-semibold">{value || "—"}</p>
    </div>
  );
}
