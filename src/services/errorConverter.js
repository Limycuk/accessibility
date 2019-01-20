import Joi from "joi";
import _ from "lodash";

// function notValid() {
//   return `Некорректные данные`;
// }

function errorMessages(type, label, limit) {
  var message = "";

  switch (type) {
    case "any.required":
      message = "Required";
      break;
    // case 'string.email':
    //   message = 'Некорректная электронная почта';
    //   break;
    // case 'string.min':
    //   message = `Минимальная длина ${limit} символов`;
    //   break;
    // case 'string.max':
    //   message = `Максимальная длина ${limit} символов`;
    //   break;
    // case 'string.regex.base':
    //   message = notValid();
    //   break;
    // case 'string.alphanum':
    //   message = notValid();
    //   break;
    // case 'any.allowOnly':
    //   message = 'Пароли не совпадают';
    //   break;
    // case 'number.base':
    //   message = `${label} должна быть числом`;
    //   break;
    // case 'number.min':
    //   message = `${label} меньше чем ${limit}`;
    //   break;
    default:
      break;
  }

  return message;
}

export default function(data, schema) {
  var result;
  var response = Joi.validate(data, schema, {
    abortEarly: false
  });

  if (response.error && response.error.details) {
    result = response.error.details.reduce(function(memo, item) {
      const error = errorMessages(
        item.type,
        item.context.label,
        item.context.limit
      );

      if (error) {
        _.set(memo, item.path.join("."), error);
      }

      return memo;
    }, {});
  } else {
    result = {};
  }

  return result;
}
