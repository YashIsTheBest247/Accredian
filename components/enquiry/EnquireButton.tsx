"use client";

import type { ComponentProps, ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { useEnquiry } from "@/components/enquiry/EnquiryContext";

type Props = Omit<ComponentProps<typeof Button>, "onClick"> & { children: ReactNode };

export function EnquireButton({ children, ...props }: Props) {
  const { open } = useEnquiry();
  return (
    <Button onClick={open} {...props}>
      {children}
    </Button>
  );
}
