
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Spinner from "../spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FormComponent = ({ fields, schema, onSubmit, title, notes, submitText, error, text, link }) => {
  console.log('====================================');
  console.log('Error case 1 :',error,error?.response?.data);
  console.log('====================================');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  console.log('====================================');
  console.log('Error case 2 :', errors);
  console.log('====================================');

  return (
    <div className="flex items-center justify-center min-h-full pt-28">
      <div className="w-full max-w-md p-8 rounded-md">
        <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>
        {notes && (
          <h4 className="text-sm mt-4 leading-relaxed text-center">
            {notes}
          </h4>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          {fields.map((field, idx) => (
            <div key={idx}>
              <Label htmlFor={field.name}>{field.label}</Label>
              <div className="relative">
                <Input
                  autoFocus={idx === 0}
                  id={field.name}
                  type={showPassword && field.type === "password" ? "text" : field.type}
                  placeholder={field.placeholder}
                  {...register(field.name)}
                  className={`mt-2 text-sm ${errors[field.name]  || error?.response?.data?.[field.name]?.[0] ? "border-red-500" : ""
                    }`}
                />
                {field.type === "password" && (
                  <span
                    className="absolute inset-y-0 right-3 text-sm flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "显示" : "隐藏"}
                  </span>
                )}
              </div>
              {field.helperText && (
                <p className="text-xs font-thin">
                  {field.helperText}
                </p>
              )}
              {errors[field.name] ||  error?.response?.data?.[field.name]?.[0] && (
                <p className="text-sm text-red-500 mt-1">
                  {errors[field.name]?.message ||  error?.response?.data?.[field.name]?.[0]}
                </p>
              )}
            </div>
          ))}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full items-center"
          >
            {isSubmitting ? <Spinner /> : submitText}
          </Button>
        </form>
        {text && link && (
          <div className="flex justify-center mt-4">
            <Button
              variant="link"
              className="text-sm text-black underline focus:outline-none"
              onClick={() => navigate(link)}
            >
              {text}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormComponent;

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Spinner from "../spinner/Spinner";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const FormComponent = ({ fields, schema, onSubmit, title, notes, submitText, error, text, link }) => {
//   console.log('====================================');
//   console.log('Error case 1 :',error,error?.response?.data);
//   console.log('====================================');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: zodResolver(schema),
//   });

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };
//   console.log('====================================');
//   console.log('Error case 2 :', errors);
//   console.log('====================================');

//   return (
//     <div className="flex items-center justify-center min-h-full pt-28">
//       <div className="w-full max-w-md p-8 rounded-md">
//         <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>
//         {notes && (
//           <h4 className="text-sm mt-4 leading-relaxed text-center">
//             {notes}
//           </h4>
//         )}

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
//           {fields.map((field, idx) => (
//             <div key={idx}>
//               <Label htmlFor={field.name}>{field.label}</Label>
//               <div className="relative">
//                 <Input
//                   autoFocus={idx === 0}
//                   id={field.name}
//                   type={showPassword && field.type === "password" ? "text" : field.type}
//                   placeholder={field.placeholder}
//                   {...register(field.name)}
//                   className={`mt-2 text-sm ${errors[field.name] ? "border-red-500" : ""
//                     }`}
//                 />
//                 {field.type === "password" && (
//                   <span
//                     className="absolute inset-y-0 right-3 text-sm flex items-center cursor-pointer"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? "显示" : "隐藏"}
//                   </span>
//                 )}
//               </div>
//               {field.helperText && (
//                 <p className="text-xs font-thin">
//                   {field.helperText}
//                 </p>
//               )}
//               {errors[field.name] && (
//                 <p className="text-sm text-red-500 mt-1">
//                   {errors[field.name]?.message || error?.response?.data.error?.[0]}
//                 </p>
//               )}
//             </div>
//           ))}
//           <Button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full rounded-full items-center"
//           >
//             {isSubmitting ? <Spinner /> : submitText}
//           </Button>
//         </form>
//         {text && link && (
//           <div className="flex justify-center mt-4">
//             <Button
//               variant="link"
//               className="text-sm text-black underline focus:outline-none"
//               onClick={() => navigate(link)}
//             >
//               {text}
//             </Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FormComponent;
