import { useForm } from 'react-hook-form';
import Input from './Input';
import InputSpacer from './InputSpacer';

const FormError = ({ errorMessage }) => {
  return <p className="mt-1 text-red-300">{errorMessage}</p>;
};

interface AddRoomFormProps {
  onSubmit: any;
}

export default function AddRoomForm2(props: AddRoomFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();
  return (
    // <SlideUpModal2 heading={'Add Room'} add={false} onClose={onClose}>
    <form className="flex flex-col p-4" onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <Input
          placeholder="Entity Name"
          {...register('entityName', { required: false })}
        />
        {/* {errors.entityName && (
          <FormError errorMessage="Entity Name is required" />
        )} */}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Entity ID"
          {...register('entityId', { required: true })}
        />
        {/* {errors.entityId && <FormError errorMessage="Entity ID is required" />} */}
      </InputSpacer>
      <InputSpacer>
        <Input placeholder="Icon" {...register('icon', { required: true })} />
        {/* {errors.icon && <FormError errorMessage="Icon is required" />} */}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Temperature Entity"
          {...register('tempId', { required: false })}
        />
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Humidity Entity"
          {...register('humidId', { required: false })}
        />
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Climate Entity"
          {...register('climateId', { required: false })}
        />
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Window Sensor"
          {...register('windowId', { required: false })}
        />
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Door Sensor"
          {...register('doorId', { required: false })}
        />
      </InputSpacer>

      <button
        className="rounded-md bg-blue-500 p-4 text-blue-100"
        type="submit"
      >
        Submit
      </button>
    </form>
    // </SlideUpModal2>
  );
}
