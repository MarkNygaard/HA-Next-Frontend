import { SlideUpModal2 } from '@components/modals';
import React from 'react';
import { useForm } from 'react-hook-form';

interface AddRoomFormProps {
  onSubmit: any;
  onClose: any;
}

export default function AddRoomForm({ onSubmit, onClose }: AddRoomFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <SlideUpModal2 heading={'Add Room'} add={false} onClose={onClose}>
      <div className="p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-1 text-zinc-300">
            <div className="flex flex-col">
              <label>Entity Name</label>
              <input
                className="px-2 text-black"
                {...register('entityName', { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label>Entity ID</label>
              <input
                className="px-2 text-black"
                {...register('entityId', { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label>Sorting</label>
              <input
                type="number"
                className="px-2 text-black"
                {...register('sorting', { required: false })}
              />
            </div>
            <div className="flex flex-col">
              <label>Icon</label>
              <input
                className="px-2 text-black"
                {...register('icon', { required: false })}
              />
            </div>
            <div className="flex flex-col">
              <label>Temperature Sensor</label>
              <input
                className="px-2 text-black"
                {...register('tempId', { required: false })}
              />
            </div>
            <div className="flex flex-col">
              <label>Humidity Sensor</label>
              <input
                className="px-2 text-black"
                {...register('humidId', { required: false })}
              />
            </div>
            <div className="flex flex-col">
              <label>Climate</label>
              <input
                className="px-2 text-black"
                {...register('climateId', { required: false })}
              />
            </div>
            <div className="flex flex-col">
              <label>Window ID</label>
              <input
                className="px-2 text-black"
                {...register('windowId', { required: false })}
              />
            </div>
            <div className="flex flex-col">
              <label>Door ID</label>
              <input
                className="px-2 text-black"
                {...register('doorId', { required: false })}
              />
            </div>
            <div>
              <button
                className="text-md mt-2 w-full rounded border bg-zinc-400 py-1 px-3 font-semibold text-white hover:bg-zinc-600"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </SlideUpModal2>
  );
}
