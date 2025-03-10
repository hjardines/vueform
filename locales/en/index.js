export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Add",
        "remove": "&times;",
      },
      "file": {
        "defaultName": "File",
        "dndTitle": "Upload file",
        "dndDescription": "Drop file or click here to upload",
        "removeConfirm": "By removing the file it will be permanently deleted. Are you sure to continue?",
        "select": "Select file",
        "upload": "Upload",
      },
      "multifile": {
        "uploadButton": "Upload files",
        "dndTitle": "Upload files",
        "dndDescription": "Drop files or click here to upload",
      },
      "gallery": {
        "uploadButton": "Upload images",
        "dndTitle": "Upload images",
        "dndDescription": "Drop images or click here to upload",
      },
    },
    "steps": {
      "finish": "Finish",
      "next": "Next",
      "previous": "Previous",
    },
    "editor": {
      "acceptedMimesError": "Accepted mimes are: :mimes",
      "acceptedExtensionsError": "Accepted extenions are: :extensions",
    },
    "datepicker": {
      "weekdays": {
        "shorthand": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "longhand": [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      "months": {
        "shorthand": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        "longhand": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      "daysInMonth": [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      "firstDayOfWeek": 0,
      "ordinal": (nth) => {
        const s = nth % 100;
        if (s > 3 && s < 21) return "th";
        switch (s % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      },
      "rangeSeparator": " to ",
      "weekAbbreviation": "Wk",
      "scrollTitle": "Scroll to increment",
      "toggleTitle": "Click to toggle",
      "amPM": ["AM", "PM"],
      "yearAriaLabel": "Year",
      "monthAriaLabel": "Month",
      "hourAriaLabel": "Hour",
      "minuteAriaLabel": "Minute",
    },
    "dateFormats": {
      "datetimeSeconds24": "YYYY-MM-DD HH:mm:ss",
      "datetimeSeconds12": "YYYY-MM-DD hh:mm:ss a",
      "datetime24": "YYYY-MM-DD HH:mm",
      "datetime12": "YYYY-MM-DD hh:mm a",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "hh:mm:ss a",
      "time24": "HH:mm",
      "time12": "hh:mm a",
      "date": "YYYY-MM-DD",
    },
    "multiselect": {
      "multipleLabelOne": "1 option selected",
      "multipleLabelMore": ":options options selected",
      "noResults": "No options found",
      "noOptions": "The list is empty",
    },
    "defaultMessage": "Invalid field",
  },
  "validation": {
    "accepted": "The :attribute must be accepted.",
    "active_url": "The :attribute is not a valid URL.",
    "after": "The :attribute must be a date after :date.",
    "after_or_equal": "The :attribute must be a date after or equal to :date.",
    "alpha": "The :attribute may only contain letters.",
    "alpha_dash": "The :attribute may only contain letters, numbers, dashes and underscores.",
    "alpha_num": "The :attribute may only contain letters and numbers.",
    "array": "The :attribute must be an array.",
    "before": "The :attribute must be a date before :date.",
    "before_or_equal": "The :attribute must be a date before or equal to :date.",
    "between": {
      "numeric": "The :attribute must be between :min and :max.",
      "file": "The :attribute must be between :min and :max kilobytes.",
      "string": "The :attribute must be between :min and :max characters.",
      "array": "The :attribute must have between :min and :max items.",
    },
    "boolean": "The :attribute field must be true or false.",
    "confirmed": "The :attribute confirmation does not match.",
    "date": "The :attribute is not a valid date.",
    "date_format": "The :attribute does not match the format :format.",
    "date_equals": "The :attribute must be equal to :date.",
    "different": "The :attribute and :other must be different.",
    "digits": "The :attribute must be :digits digits.",
    "digits_between": "The :attribute must be between :min and :max digits.",
    "dimensions": "The :attribute has invalid image dimensions.",
    "distinct": "The :attribute field has a duplicate value.",
    "email": "The :attribute must be a valid email address.",
    "exists": "The selected :attribute is invalid.",
    "file": "The :attribute must be a file.",
    "filled": "The :attribute field must have a value.",
    "gt": {
      "numeric": "The :attribute must be greater than :value.",
      "file": "The :attribute must be greater than :value kilobytes.",
      "string": "The :attribute must be greater than :value characters.",
      "array": "The :attribute must have more than :value items.",
    },
    "gte": {
      "numeric": "The :attribute must be greater than or equal :value.",
      "file": "The :attribute must be greater than or equal :value kilobytes.",
      "string": "The :attribute must be greater than or equal :value characters.",
      "array": "The :attribute must have :value items or more.",
    },
    "image": "The :attribute must be an image.",
    "in": "The selected :attribute is invalid.",
    "in_array": "The :attribute field does not exist in :other.",
    "integer": "The :attribute must be an integer.",
    "ip": "The :attribute must be a valid IP address.",
    "ipv4": "The :attribute must be a valid IPv4 address.",
    "ipv6": "The :attribute must be a valid IPv6 address.",
    "json": "The :attribute must be a valid JSON string.",
    "lt": {
      "numeric": "The :attribute must be less than :value.",
      "file": "The :attribute must be less than :value kilobytes.",
      "string": "The :attribute must be less than :value characters.",
      "array": "The :attribute must have less than :value items.",
    },
    "lte": {
      "numeric": "The :attribute must be less than or equal :value.",
      "file": "The :attribute must be less than or equal :value kilobytes.",
      "string": "The :attribute must be less than or equal :value characters.",
      "array": "The :attribute must not have more than :value items.",
    },
    "max": {
      "numeric": "The :attribute may not be greater than :max.",
      "file": "The :attribute may not be greater than :max kilobytes.",
      "string": "The :attribute may not be greater than :max characters.",
      "array": "The :attribute may not have more than :max items.",
    },
    "mimes": "The :attribute must be a file of type: :values.",
    "mimetypes": "The :attribute must be a file of type: :values.",
    "min": {
      "numeric": "The :attribute must be at least :min.",
      "file": "The :attribute must be at least :min kilobytes.",
      "string": "The :attribute must be at least :min characters.",
      "array": "The :attribute must have at least :min items.",
    },
    "not_in": "The selected :attribute is invalid.",
    "not_regex": "The :attribute format is invalid.",
    "numeric": "The :attribute must be a number.",
    "present": "The :attribute field must be present.",
    "regex": "The :attribute format is invalid.",
    "required": "The :attribute field is required.",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": "The :attribute and :other must match.",
    "size": {
      "numeric": "The :attribute must be :size.",
      "file": "The :attribute must be :size kilobytes.",
      "string": "The :attribute must be :size characters.",
      "array": "The :attribute must contain :size items.",
    },
    "string": "The :attribute must be a string.",
    "timezone": "The :attribute must be a valid zone.",
    "unique": "The :attribute has already been taken.",
    "uploaded": "The :attribute failed to upload.",
    "url": "The :attribute format is invalid.",
    "uuid": "The :attribute must be a valid UUID.",
    "remote": "The :attribute field is invalid.",
  }
}