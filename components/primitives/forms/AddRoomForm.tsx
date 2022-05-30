import { SlideUpModal2 } from '@components/modals';
import React, { useEffect } from 'react';
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
    setFocus,
  } = useForm();

  useEffect(() => {
    setFocus('entityName');
  }, []);

  return (
    <SlideUpModal2 heading={'Add Room'} add={false} onClose={onClose}>
      <div className="overflow-y-auto p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-1 text-zinc-900">
            <div className="flex flex-col text-left dark:text-white">
              <label>Entity Name</label>
              <input
                onBlur={false}
                className="rounded-md border-[1px] border-zinc-300 px-2 text-black"
                {...register('entityName', { required: true })}
              />
            </div>
            <div className="flex flex-col text-left dark:text-white">
              <label>Entity ID</label>
              <input
                className="rounded-md border-[1px] border-zinc-300 px-2 text-black"
                {...register('entityId', { required: true })}
              />
            </div>
            <div className="flex flex-col text-left dark:text-white">
              <label>Sorting</label>
              <input
                type="number"
                className="rounded-md border-[1px] border-zinc-300 px-2 text-black"
                {...register('sorting', { required: false })}
              />
            </div>
            <div className="flex flex-col text-left dark:text-white">
              <label>Icon</label>
              <input
                className="rounded-md border-[1px] border-zinc-300 px-2 text-black"
                {...register('icon', { required: false })}
              />
            </div>
            <div className="flex flex-col text-left dark:text-white">
              <label>Temperature Sensor</label>
              <input
                className="rounded-md border-[1px] border-zinc-300 px-2 text-black"
                {...register('tempId', { required: false })}
              />
            </div>
            <div className="flex flex-col text-left dark:text-white">
              <label>Humidity Sensor</label>
              <input
                className="rounded-md border-[1px] border-zinc-300 px-2 text-black"
                {...register('humidId', { required: false })}
              />
            </div>
            <div className="flex flex-col text-left dark:text-white">
              <label>Climate</label>
              <input
                className="rounded-md border-[1px] border-zinc-300 px-2 text-black"
                {...register('climateId', { required: false })}
              />
            </div>
            <div className="flex flex-col text-left dark:text-white">
              <label>Window ID</label>
              <input
                className="rounded-md border-[1px] border-zinc-300 px-2 text-black"
                {...register('windowId', { required: false })}
              />
            </div>
            <div className="flex flex-col text-left dark:text-white">
              <label>Door ID</label>
              <input
                className="rounded-md border-[1px] border-zinc-300 px-2 text-black"
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
