import React from 'react';
import { BsEnvelopeAt, BsTelephone } from "react-icons/bs";
import { FormButton, FormInput } from '../ModalFormMobile';

const HelpStep = () => {
  return (
    <div className="space-y-6">
      <div className="py-2 bg-contain bg-center bg-no-repeat h-48 md:h-64" style={{ backgroundImage: `url('../../Help.svg')` }}></div>

      <div className="space-y-4 mt-4">
        <div className="flex justify-center">
          <div className="w-4/5">
            <FormInput
              type="text"
              placeholder="Kindly type your question here"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className="text-l font-semibold text-[#707FDD]">Or</h1>
        </div>
        <div className="flex justify-center gap-4">
          <FormButton variant="primary" className="flex items-center space-x-2">
            <span>Send Us a Mail</span>
            <BsEnvelopeAt />
          </FormButton>

          <FormButton variant="secondary" className="flex items-center space-x-2">
            <span>Give Us a Call</span>
            <BsTelephone />
          </FormButton>
        </div>
      </div>
    </div>
  );
};

export default HelpStep;

