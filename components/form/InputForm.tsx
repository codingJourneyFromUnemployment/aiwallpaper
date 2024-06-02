import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const InputForm = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-4/5 md:w-2/3 max-w-4xl md:flex-row md:space-x-6 md:mb-6 md:space-y-8 xl:space-x-10">
      <Input type="text" placeholder="Input some ideas for your wallpaper" />
      <Button>Generate</Button>
    </div>
  );
};

export default InputForm;
