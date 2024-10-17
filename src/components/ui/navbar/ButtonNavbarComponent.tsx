import { Button } from "@nextui-org/react";
import React from "react";

const ButtonNavbarComponent = ({ name }: { name: string }) => {
  return (
    <Button className="py-6 px-10 bg-primary rounded-full text-light flex !sub-heading-2">
      {name}
    </Button>
  );
};

export default ButtonNavbarComponent;
