import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormFieldError from "@/forms/FormComponents/FormFieldError";

const FormRadio = ({
    register,
    options,
    name,
    label,
    legendShow = true,
    errors,
    validationRules,
    defaultValue,
}) => {
    const renderItems = () => {
        return options.map((option, index) => (
            <div className="relative w-full px-4 py-3 border-[1px] border-slate-200 rounded-md flex items-center cursor-pointer hover:border-brand-900 hover:text-brand-900 has-[:checked]:border-brand-900 has-[:checked]:text-brand-900">
                <input
                    {...register(name, validationRules)}
                    key={index}
                    value={option.value}
                    name={name}
                    type="radio"
                    className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                    defaultChecked={defaultValue === option.value}
                />
                <FontAwesomeIcon icon={option.icon} />
                <label className="pl-6">{option.name}</label>
            </div>
        ));
    };

    return (
        <div className="w-full">
            <legend
                className={`${!legendShow && "sr-only"} block text-sm font-medium text-gray-700`}
            >
                {label}
            </legend>
            <fieldset className="mt-1 grid grid-cols-2 gap-2">{renderItems()}</fieldset>
            <FormFieldError name={name} errors={errors} />
        </div>
    );
};

export default FormRadio;
