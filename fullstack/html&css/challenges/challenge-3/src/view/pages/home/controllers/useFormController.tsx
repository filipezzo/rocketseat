import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const colors = [
  {
    id: 1,
    color: "#B259FF",
  },

  {
    id: 2,
    color: "#FF59F9",
  },

  {
    id: 3,
    color: "#FF598B",
  },

  {
    id: 4,
    color: "#FF8B59",
  },

  {
    id: 5,
    color: "#FFCD59",
  },

  {
    id: 6,
    color: "#E1FF59",
  },

  {
    id: 7,
    color: "#59FF91",
  },

  {
    id: 8,
    color: "#59FFF9",
  },
  {
    id: 9,
    color: "#6A59FF",
  },

  {
    id: 10,
    color: "#6A59FF",
  },
  {
    id: 11,
    color: "#FA5456",
  },
];

const schema = z.object({
  title: z.string().min(1, "Titúlo é obrigatório"),
  startDate: z.string(),
  endDate: z.string(),
  type: z.enum(["presencial", "online"]),
  local: z.string(),
  description: z.string(),
  color: z.string(),
  theme: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  terms: z.boolean(),
  emailTerms: z.boolean().optional(),
  smsTerms: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

export function useFormController() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const nav = useNavigate();
  const onSubmitting = (data: FormData) => {
    nav("/convite", { state: data });
  };

  useEffect(() => {
    if (Object.entries(errors).length > 0) {
      toast.error("Preencha todos os campos!");
    }
  }, [errors]);

  return {
    colors,
    register,
    handleSubmit,
    onSubmitting,
  };
}
