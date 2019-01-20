import Joi from "joi";
export const FORM_NAME = "FORM";

export const STATUS_OPTIONS = [
  {
    value: "open",
    label: "Open"
  },
  {
    value: "close",
    label: "Close"
  },
  {
    value: "waiting",
    label: "Waiting"
  }
];

export const BANKS_OPTIONS = [
  {
    value: "bank1",
    label: "Bank 1"
  },
  {
    value: "bank2",
    label: "Bank 2"
  },
  {
    value: "bank3",
    label: "Bank 3"
  }
];

export const GENDER_OPTIONS = [
  {
    value: "male",
    label: "Male"
  },
  {
    value: "female",
    label: "Female"
  }
];

export const FORM_SCHEMA = Joi.object().keys({
  name: Joi.string().required(),
  password: Joi.string().required(),
  status: Joi.string(),
  banks: Joi.array(),
  gender: Joi.string(),
  favorite: Joi.bool(),
  approved: Joi.bool()
});
