function e(e){return"string"==typeof e?e[0].toUpperCase()+e.substr(1):e}var r={accepted:function(e){return"من فضلك اقبل ال "+e.name},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" يجب أن يأتي بعد "+a[0]+".":e(n)+" يجب أن يكون تاريخ أحدث"},alpha:function(r){return e(r.name)+" يجب أن يحتوى على حروف أبجدية فقط."},alphanumeric:function(r){return e(r.name)+" يمكن أن يحتوي على حروف أبجدية أو أرقام فقط."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" يجب أن يكون قبل "+a[0]+".":e(n)+" يجب أن يكون تاريخ أقدم"},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" يجب أن يقع بين "+t[0]+" و "+t[1]+".":e(n)+" يجب ان يكون طوله بين "+t[0]+" و "+t[1]+" حرف."},confirm:function(r){var n=r.name;r.args;return e(n)+" غير متطابق."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" ليس على الصيغة الصحيحة, من فضلك استخدم هذه الصيغة "+a[0]:e(n)+" ليس على الصيغة الصحيحة."},default:function(e){e.name;return"هذه القيمة غير مناسبة."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” ليس عنوان بريد الكتروني.":"من فضلك أدخل عنوان بريد الكتروني مناسب."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” لا تنتهي بنهاية صحيحة.":"نهاية هذه القيمة ليست صحيحة."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” ليس "+n+" صحيح.":"هذه القيمة ليست "+n+" صحيح."},matches:function(r){return e(r.name)+" ليست قيمة مسموح بها."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"يمكنك فقط ان تختار "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" لا يمكن أن يتجاوز "+t[0]+".":e(n)+" لا يجب ان يزيد طوله عن "+t[0]+" حرف."},mime:function(r){var n=r.name,a=r.args;return e(n)+" يجب ان يكون من نوع "+(a[0]||"لا يسمح بأي نوع.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"يجب أن تختار على الأقل "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" يجب أن يكون أكبر من "+t[0]+".":e(n)+" يجب أن يكون طوله أكبر من "+t[0]+" حرف."},not:function(e){var r=e.name;return"“"+e.value+"” ليست قيمة مسموح بها ك"+r+"."},number:function(r){return e(r.name)+" يجب أن يكون رقم."},required:function(r){return e(r.name)+" ضروري."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” لا تبدأ بقيمة صحيحة.":"هذه القيمة لا تبدأ بقيمة صحيحة."},url:function(e){e.name;return"من فضلك أدخل رابط صحيح."}};function n(e){var n;e.extend({locales:(n={},n.ar=r,n)})}var a={accepted:function(e){return"Accepter venligst "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" skal være efter "+a[0]+".":e(n)+" skal være en senere dato."},alpha:function(r){return e(r.name)+" kan kun indeholde bogstaver."},alphanumeric:function(r){return e(r.name)+" kan kun indeholde bogstaver og tal."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" skal være før "+a[0]+".":e(n)+" skal være en tidligere dato."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" skal være mellem "+t[0]+" og "+t[1]+".":e(n)+" skal være mellem "+t[0]+" og "+t[1]+" tegn."},confirm:function(r){var n=r.name;r.args;return e(n)+" matcher ikke."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" er ikke gyldig, brug venligst formatet "+a[0]:e(n)+" er ikke en gyldig dato."},default:function(e){e.name;return"Dette felt er ikke gyldigt."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” er ikke en gyldig email-adresse.":"Indtast venligst en gyldig email-adresse."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” slutter ikke med en gyldig værdi.":"Dette felt slutter ikke med en gyldig værdi."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” er ikke en tilladt "+n+".":"Dette er ikke en tilladt "+n+"."},matches:function(r){return e(r.name)+" er ikke en gyldig værdi."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Du kan kun vælge "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" skal være mindre end eller lig "+t[0]+".":e(n)+" skal være mindre end eller lig "+t[0]+" tegn."},mime:function(r){var n=r.name,a=r.args;return e(n)+" skal være af typen: "+(a[0]||"Ingen tilladte filformater.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Du skal vælge mindst "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" skal være mere end "+t[0]+".":e(n)+" skal være mere end "+t[0]+" tegn."},not:function(e){var r=e.name;return"“"+e.value+"” er ikke en gyldig "+r+"."},number:function(r){return e(r.name)+" skal være et tal."},required:function(r){return e(r.name)+" er påkrævet."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” starter ikke med en gyldig værdi.":"Dette felt starter ikke med en gyldig værdi."},url:function(e){e.name;return"Indtast venligst en gyldig URL."}};function t(e){var r;e.extend({locales:(r={},r.da=a,r)})}var i={accepted:function(e){return e.name+" erfordert Zustimmung."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" muss auf "+a[0]+" folgen.":e(n)+" muss ein späteres Datum sein."},alpha:function(r){return e(r.name)+" darf nur Buchstaben enthalten."},alphanumeric:function(r){return e(r.name)+" darf nur Buchstaben und Zahlen enthalten."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" muss vor "+a[0]+" sein.":e(n)+" muss ein früheres Datum sein."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" muss zwischen "+t[0]+" und "+t[1]+".":e(n)+" muss zwischen "+t[0]+" und "+t[1]+" Zeichen lang sein."},confirm:function(r){var n=r.name;r.args;return e(n)+" stimmt nicht überein."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" ist nicht korrekt, bitte das Format "+a[0]+" benutzen.":e(n)+" ist kein gültiges Datum."},default:function(e){e.name;return"Das Feld hat einen Fehler."},email:function(e){e.name;var r=e.value;return r?"„"+r+"“ ist keine gültige E-Mail-Adresse.":"Bitte eine gültige E-Mail-Adresse eingeben."},endsWith:function(e){e.name;var r=e.value;return r?"„"+r+"” endet nicht mit einem gültigen Wert.":"Dieses Feld endet nicht mit einem gültigen Wert"},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"„"+e(a)+"“ ist kein gültiger Wert für "+n+".":"Dies ist kein gültiger Wert für "+n+"."},matches:function(r){return e(r.name)+" ist kein gültiger Wert."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Es dürfen nur "+t[0]+" "+n+" ausgewählt werden.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" muss kleiner oder gleich "+t[0]+" sein.":e(n)+" muss "+t[0]+" oder weniger Zeichen lang sein."},mime:function(r){var n=r.name,a=r.args;return e(n)+" muss den Typ "+(a[0]||"Keine Dateien erlaubt")+" haben."},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Es müssen mindestens "+t[0]+" "+n+" ausgewählt werden.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" muss größer als "+t[0]+" sein.":e(n)+" must "+t[0]+" oder mehr Zeichen lang sein."},not:function(e){var r=e.name;return"„"+e.value+"“ ist kein erlaubter Wert für "+r+"."},number:function(r){return e(r.name)+" muss eine Zahl sein."},required:function(r){return e(r.name)+" ist ein Pflichtfeld."},startsWith:function(e){e.name;var r=e.value;return r?"„"+r+"” beginnt nicht mit einem gültigen Wert":"Dieses Feld beginnt nicht mit einem gültigen Wert"},url:function(r){return e(r.name)+" muss eine gültige URL sein."}};function u(e){var r;e.extend({locales:(r={},r.de=i,r)})}var o={accepted:function(e){return"Please accept the "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" must be after "+a[0]+".":e(n)+" must be a later date."},alpha:function(r){return e(r.name)+" can only contain alphabetical characters."},alphanumeric:function(r){return e(r.name)+" can only contain letters and numbers."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" must be before "+a[0]+".":e(n)+" must be an earlier date."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" must be between "+t[0]+" and "+t[1]+".":e(n)+" must be between "+t[0]+" and "+t[1]+" characters long."},confirm:function(r){var n=r.name;r.args;return e(n)+" does not match."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" is not a valid date, please use the format "+a[0]:e(n)+" is not a valid date."},default:function(e){e.name;return"This field isn’t valid."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” is not a valid email address.":"Please enter a valid email address."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” doesn’t end with a valid value.":"This field doesn’t end with a valid value."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” is not an allowed "+n+".":"This is not an allowed "+n+"."},matches:function(r){return e(r.name)+" is not an allowed value."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"You may only select "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" must be less than or equal to "+t[0]+".":e(n)+" must be less than or equal to "+t[0]+" characters long."},mime:function(r){var n=r.name,a=r.args;return e(n)+" must be of the the type: "+(a[0]||"No file formats allowed.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"You need at least "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" must be at least "+t[0]+".":e(n)+" must be at least "+t[0]+" characters long."},not:function(e){var r=e.name;return"“"+e.value+"” is not an allowed "+r+"."},number:function(r){return e(r.name)+" must be a number."},required:function(r){return e(r.name)+" is required."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” doesn’t start with a valid value.":"This field doesn’t start with a valid value."},url:function(e){e.name;return"Please include a valid url."}};function s(e){var r;e.extend({locales:(r={},r.en=o,r)})}var l={accepted:function(e){return"Por favor acepta los "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" debe ser luego de "+a[0]+".":e(n)+" debe ser una fecha posterior."},alpha:function(r){return e(r.name)+" solo puede contener letras."},alphanumeric:function(r){return e(r.name)+" solo puede contener letras y números."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" debe ser antes de "+a[0]+".":e(n)+" debe ser una fecha anterior."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" debe estar entre "+t[0]+" y "+t[1]+".":e(n)+" debe tener entre "+t[0]+" y "+t[1]+" caracteres."},confirm:function(r){var n=r.name;r.args;return e(n)+" no coincide."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" no es una fecha válida, por favor use el formato "+a[0]:e(n)+" no es una fecha válida."},default:function(e){e.name;return"Este campo no es válido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” no es un correo electrónico válido.":"Por favor introduzca un correo electrónico válido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” no termina en un valor válido.":"Este campo no termina en un valor válido."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” no es un "+n+" permitido.":"Esto no es un "+n+" permitido."},matches:function(r){return e(r.name)+" no es un valor permitido."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Solo puedes seleccionar "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" debe ser menor o igual que "+t[0]+".":e(n)+" debe ser menor o igual que "+t[0]+" caracteres."},mime:function(r){var n=r.name,a=r.args;return e(n)+" debe ser de tipo: "+(a[0]||"No se permite el formato de archivos.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Necesitas al menos "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" debe contener al menos "+t[0]+".":e(n)+" debe contener al menos "+t[0]+" caracteres."},not:function(e){var r=e.name;return"“"+e.value+"” no es un "+r+" permitido."},number:function(r){return e(r.name)+" debe ser un número."},required:function(r){return e(r.name)+" es requerido."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” no comienza con un valor válido.":"Este campo no comienza con un valor válido."},url:function(e){e.name;return"Por favor introduzca una url válida."}};function m(e){var r;e.extend({locales:(r={},r.es=l,r)})}var c={accepted:function(e){return"Merci d'accepter les "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" doit être postérieur à "+a[0]+".":e(n)+" doit être une date ultérieure."},alpha:function(r){return e(r.name)+" peut uniquement contenir des lettres."},alphanumeric:function(r){return e(r.name)+" peut uniquement contenir des lettres ou des chiffres"},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" doit être antérieur à "+a[0]+".":e(n)+" doit être une date antérieure."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" doit être compris entre "+t[0]+" et "+t[1]+".":e(n)+" doit être compris entre "+t[0]+" et "+t[1]+" caractères."},confirm:function(r){var n=r.name;r.args;return e(n)+" ne correspond pas."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" n'est pas valide.  Merci d'utiliser le format "+a[0]:e(n)+" n'est pas une date valide."},default:function(e){e.name;return"Ce champ n'est pas valide."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” n'est pas une adresse email valide.":"Merci d'entrer une adresse email valide."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” ne termine pas par une valeur correcte.":"Ce champ ne termine pas par une valeur correcte."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” n'est pas un(e) "+n+" autorisé(e).":"Cette valeur n'est pas un(e) "+n+" autorisé(e)."},matches:function(r){return e(r.name)+" n'est pas une valeur autorisée."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Vous pouvez uniquement sélectionner "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" doit être inférieur ou égal à "+t[0]+".":e(n)+" doit être inférieur ou égal à "+t[0]+" caractères."},mime:function(r){var n=r.name,a=r.args;return e(n)+" doit être de type: "+(a[0]||"Aucun format autorisé.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Vous devez sélectionner au moins "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" doit être supérieur à "+t[0]+".":e(n)+" doit être plus long que "+t[0]+" caractères."},not:function(e){var r=e.name;return"“"+e.value+"” n'est pas un(e) "+r+" autorisé(e)."},number:function(r){return e(r.name)+" doit être un nombre."},required:function(r){return e(r.name)+" est obligatoire."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” ne commence pas par une valeur correcte.":"Ce champ ne commence pas par une valeur correcte."},url:function(e){e.name;return"Merci d'entrer une URL valide."}};function v(e){var r;e.extend({locales:(r={},r.fr=c,r)})}var f={accepted:function(e){return"אנא קבל את ה"+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" חייב להיות אחרי "+a[0]+".":e(n)+" חייב להיות תאריך יותר מאוחר."},alpha:function(r){return e(r.name)+" יכול להכיל אותיות בלבד."},alphanumeric:function(r){return e(r.name)+" יכול להכיל אותיות ומספרים בלבד."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" חייב להיות לפני "+a[0]+".":e(n)+" חייב להיות תאריך יותר מוקדם."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" חייב להיות בין "+t[0]+" ו-"+t[1]+".":e(n)+" חייב להיות בין "+t[0]+" ו-"+t[1]+" אותיות."},confirm:function(r){var n=r.name;r.args;return e(n)+" אינו תואם."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" אינו תאריך תקין, אנא השתמש בפורמט "+a[0]:e(n)+" אינו תאריך תקין."},default:function(e){e.name;return"השדה אינו תקין."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” אינו כתובת אימייל תקין.":"אנא הכנס כתובת אימייל תקין."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” אינו מסתיים בערך תקין.":"שדה זו אינו מסתיים בערך תקין."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” אינו "+n+" מורשה.":"ערך זו איננו "+n+" מורשה."},matches:function(r){return e(r.name)+" אינו ערך מורשה."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"אתה יכול לבחור רק "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" חייב להיות פחות או שוה ל-"+t[0]+".":e(n)+" חייב להיות פחות או שוה ל-"+t[0]+" אותיות."},mime:function(r){var n=r.name,a=r.args;return e(n)+" חייב להיות מסוג של: "+(a[0]||"סוגי קבצים לא מורשים.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"אתה צריך לפחות "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" חייב להיות לפחות "+t[0]+".":e(n)+" חייב להיות לפחות "+t[0]+" אותיות."},not:function(e){var r=e.name;return"“"+e.value+"” אינו "+r+" מורשה."},number:function(r){return e(r.name)+" חייב להיות מספר."},required:function(r){return e(r.name)+" נדרש."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” אינו מתחיל בערך תקף.":"שדה זה אינו מתחיל בערך תקף."},url:function(e){e.name;return"אנא כלול כתובת אתר חוקית."}};function d(e){var r;e.extend({locales:(r={},r.he=f,r)})}var g={accepted:function(e){return"Per favore, accetta il campo "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" deve essere una data successiva al "+a[0]+".":e(n)+" deve essere una data successiva a quella attuale."},alpha:function(r){return e(r.name)+" può contenere solo lettere."},alphanumeric:function(r){return e(r.name)+" può contenere solo lettere e numeri."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" deve essere una data precedente al "+a[0]+".":e(n)+" deve essere una data precedente a quella attuale."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve essere tra "+t[0]+" e "+t[1]+".":e(n)+" deve avere una lunghezza compresa tra "+t[0]+" e "+t[1]+" caratteri."},confirm:function(r){var n=r.name;r.args;return e(n)+" non corrisponde."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" non è una data valida. Per favore usa il formato "+a[0]:e(n)+" non è una data valida."},default:function(e){e.name;return"Questo campo non è valido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” non è un indirizzo email valido.":"Per favore, inserisci un indirizzo email valido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” non termina con un valore valido.":"Questo campo non termina con un valore valido."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” non è un valore valido per il campo "+n+".":n+" invalido."},matches:function(r){return e(r.name)+" invalido."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Puoi selezionare al massimo "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve essere inferiore o uguale a "+t[0]+".":e(n)+" deve essere inferiore o uguale a "+t[0]+" caratteri."},mime:function(r){var n=r.name,a=r.args;return e(n)+" deve essere del tipo: "+(a[0]||"Nessun formato file autorizzato.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Devi selezionare almeno "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve essere maggiore di "+t[0]+".":e(n)+" deve essere più lungo di "+t[0]+" caratteri."},not:function(e){var r=e.name;return"“"+e.value+"” non è un valore valido per il campo "+r+"."},number:function(r){return e(r.name)+" deve essere un numero."},required:function(r){return e(r.name)+" è un campo obbligatorio."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” non inizia con un valore valido.":"Questo campo non inizia con un valore valido."},url:function(e){e.name;return"Per favore inserisci un URL valido."}};function y(e){var r;e.extend({locales:(r={},r.it=g,r)})}var A={accepted:function(e){return e.name+"を承認してください。"},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+"は "+a[0]+" 以降にしてください。":e(n)+"はより後にしてください。"},alpha:function(r){return e(r.name)+"にはアルファベットのみ使用できます。"},alphanumeric:function(r){return e(r.name)+"には英数字のみ使用できます。"},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+"は "+a[0]+" 以前にしてください。":e(n)+"はより前にしてください。"},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+"は"+t[0]+"から"+t[1]+"の間でなければなりません。":e(n)+"は"+t[0]+"文字から"+t[1]+"文字でなければなりません。"},confirm:function(r){var n=r.name;r.args;return e(n)+"が一致しません。"},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+"は有効な形式ではありません。次のフォーマットで入力してください: "+a[0]:e(n)+"は有効な形式ではありません。"},default:function(e){e.name;return"有効な値ではありません。"},email:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効なメールアドレスではありません。":"有効なメールアドレスを入力してください。"},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効な値で終わっていません。":"有効な値で終わっていません。"},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” は許可された"+n+"ではありません。":"許可された"+n+"ではありません。"},matches:function(r){return e(r.name)+"は許可された値ではありません。"},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return n+"は"+t[0]+"項目しか選択できません。";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+"は"+t[0]+"以下でなければなりません。":e(n)+"は"+t[0]+"文字以下でなければなりません。"},mime:function(r){var n=r.name,a=r.args;return e(n)+"は次のファイル形式でなければなりません: "+(a[0]||"許可されたファイル形式がありません")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return n+"は"+t[0]+"項目以上選択してください。";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+"は"+t[0]+"以上でなければなりません。":e(n)+"は"+t[0]+"文字以上でなければなりません。"},not:function(e){var r=e.name;return"“"+e.value+"” は許可された"+r+"ではありません。"},number:function(r){return e(r.name)+"には数字のみ使用できます。"},required:function(r){return e(r.name)+"は必須項目です。"},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効な値で始まっていません。":"有効な値で始まっていません。"},url:function(e){e.name;return"有効なURLを入力してください。"}};function h(e){var r;e.extend({locales:(r={},r.ja=A,r)})}var p={accepted:function(e){return e.name+" 승인해 주세요."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+"는 "+a[0]+" 이후이어야 합니다.":e(n)+"는 미래의 날짜이어야 합니다."},alpha:function(r){return e(r.name)+"은/는 알파벳만 사용할 수 있습니다."},alphanumeric:function(r){return e(r.name)+"은/는 문자와 숫자만 사용할 수 있습니다."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+"는 "+a[0]+" 이전이어야 합니다.":e(n)+"이전이어야 합니다."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+"는 "+t[0]+"와 "+t[1]+"사이이어야 합니다.":e(n)+"은/는"+t[0]+"자애서 "+t[1]+"자 사이이어야 합니다."},confirm:function(r){var n=r.name;r.args;return e(n)+"은/는 일치하지 않습니다."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+"은/는 유효한 날짜 형식이 아닙니다. 다음과 같은 형식으로 입력해 주세요: "+a[0]:e(n)+"올바른 날짜 형식이 아닙니다."},default:function(e){e.name;return"유효하지 않은 값입니다."},email:function(e){e.name;var r=e.value;return r?"“"+r+"”은/는 유효한 이메일 주소가 아닙니다.":"유효한 이메일 주소를 입력해 주세요."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"”으로 끝내야합니다.":"유효한 값으로 끝나지 않습니다."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"”은/는 허용된 "+n+" 아닙니다.":n+"은/는 허용된 값이 아닙니다."},matches:function(r){return e(r.name)+"은/는 허용 된 값이 아닙니다."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return n+"은/는 "+t[0]+"개의 항목만 선택 가능합니다.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+"은/는 "+t[0]+"이하이어야 합니다.":e(n)+"은/는 "+t[0]+"자 이하이어야 합니다."},mime:function(r){var n=r.name,a=r.args;return e(n)+"은/는 다음과 같은 파일 형식이어야 합니다: "+(a[0]||"허용되는 파일 형식이 아닙니다.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return n+" "+t[0]+" 이상 선택해 주세요.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+"은/는 "+t[0]+"이상이어야 합니다.":e(n)+"은/는 "+t[0]+"자 이상이어야 합니다."},not:function(e){var r=e.name;return"“"+e.value+"”은/는 허용된 "+r+" 아닙니다."},number:function(r){return e(r.name)+"는 숫자만 사용 가능합니다."},required:function(r){return e(r.name)+"은/는 필수 항목입니다."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"”은/는 유효한 값으로 시작하지 않습니다.":"유효한 값으로 시작하지 않습니다."},url:function(e){e.name;return"유효한 URL을 입력해 주세요."}};function b(e){var r;e.extend({locales:(r={},r.ko=p,r)})}var N={accepted:function(e){return"Sta "+e.name+" toe."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" moet na "+a[0]+" zijn.":e(n)+" moet een latere datum zijn."},alpha:function(r){return e(r.name)+" mag enkel letters bevatten."},alphanumeric:function(r){return e(r.name)+" mag enkel letters en cijfers bevatten."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" moet voor "+a[0]+" zijn.":e(n)+" moet een eerdere datum zijn."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" moet tussen "+t[0]+" en "+t[1]+" zitten.":e(n)+" moet tussen "+t[0]+" en "+t[1]+" lang zijn."},confirm:function(r){var n=r.name;r.args;return e(n)+" komt niet overeen."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" is geen geldige datum, het juiste format is "+a[0]:e(n)+" is geen geldige datum."},default:function(e){e.name;return"De invoer voor dit veld is niet geldig"},email:function(e){e.name;var r=e.value;return r?"“"+r+"” is geen geldig e-mailadres.":"Voer een geldig e-mailadres in."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” eindigt niet op een geldige waarde.":"Dit veld eindigt niet op een geldige waarde."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” is niet toegestaan als "+n+".":"Deze "+n+" is niet toegestaan."},matches:function(r){return e(r.name)+" is niet toegestaan."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Je kunt maximaal "+t[0]+" selecteren als "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" moet kleiner of gelijk zijn aan "+t[0]+".":e(n)+" mag maximaal "+t[0]+" karakters bevatten."},mime:function(r){var n=r.name,a=r.args;return e(n)+" moet van dit type zijn: "+(a[0]||"Bestanden zijn niet toegestaan")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Je moet tenminste "+t[0]+" selecteren als "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" moet groter zijn dan "+t[0]+".":e(n)+" moet meer dan "+t[0]+" karakters bevatten."},not:function(e){var r=e.name;return"“"+e.value+"” is geen geldige "+r+"."},number:function(r){return e(r.name)+" moet een getal zijn."},required:function(r){return e(r.name)+" is verplicht."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” begint niet met een geldige waarde.":"Dit veld begint niet met een geldige waarde."},url:function(e){e.name;return"Voer een geldige URL in."}};function k(e){var r;e.extend({locales:(r={},r.nl=N,r)})}var w={accepted:function(e){return"Por favor aceite o "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" deve ser posterior a "+a[0]+".":e(n)+" deve ser uma data posterior."},alpha:function(r){return e(r.name)+" pode conter apenas letras."},alphanumeric:function(r){return e(r.name)+" pode conter apenas letras e números."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" deve ser antes de "+a[0]+".":e(n)+" deve ser uma data anterior."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve ser entre "+t[0]+" e "+t[1]+".":e(n)+" deve ter entre "+t[0]+" e "+t[1]+" caracteres."},confirm:function(r){var n=r.name;r.args;return e(n)+" não corresponde."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" não é válido, por favor use o formato "+a[0]:e(n)+" não é uma data válida."},default:function(e){e.name;return"Este campo não é válido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” não é um e-mail válido.":"Por favor informe um e-mail válido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” não termina com um valor válido.":"Este campo não termina com um valor válido."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” não é um "+n+" permitido.":"Isso não é um "+n+" permitido."},matches:function(r){return e(r.name)+" não é um valor válido."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Você deve selecionar apenas "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve ser menor ou igual a "+t[0]+".":e(n)+" deve ter no máximo "+t[0]+" caracteres."},mime:function(r){var n=r.name,a=r.args;return e(n)+" deve ser no formato: "+(a[0]||"Formato de arquivo não permitido.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Você deve selecionar pelo menos "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve ser maior que "+t[0]+".":e(n)+" deve ter mais de "+t[0]+" caracteres."},not:function(e){var r=e.name;return"“"+e.value+"” não é um "+r+" válido."},number:function(r){return e(r.name)+" deve ser um número."},required:function(r){return e(r.name)+" é obrigatório."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” não começa com um valor válido.":"Este campo não começa com um valor válido."},url:function(e){e.name;return"Por favor informe uma URL válida."}};function W(e){var r;e.extend({locales:(r={},r.pt=w,r)})}var z={accepted:function(e){return"Пожалуйста, подтвердите "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" должна быть после "+a[0]+".":e(n)+" должна быть дата после."},alpha:function(r){return e(r.name)+" может содержать только буквы."},alphanumeric:function(r){return e(r.name)+" может содержать только буквы и цифры."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" должно быть раньше "+a[0]+".":e(n)+" должно быть раньше."},between:function(r){var n=r.name,a=r.value,t=r.args;!(!Array.isArray(t)||!t[2])&&t[2];return isNaN(a),e(n)+" должно быть между "+t[0]+" и "+t[1]+"."},confirm:function(r){var n=r.name;r.args;return e(n)+" не совпадает."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" не является допустимой датой, пожалуйста, используйте формат "+a[0]:e(n)+" не является допустимой датой."},default:function(e){e.name;return"Это поле не является допустимым."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” недействительный адрес электронной почты.":"Пожалуйста, введите действительный адрес электронной почты."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” не заканчивается допустимым значением.":"Это поле не заканчивается допустимым значением."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” является ошибочным для "+n+".":"Выбранное значение для "+n+" ошибочно."},matches:function(r){return e(r.name)+" не совпадает."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Вы можете выбрать только "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" должно быть меньше или равно "+t[0]+".":"Количество символов "+e(n)+" должно быть меньше или равно "+t[0]+"."},mime:function(r){var n=r.name,a=r.args;return e(n)+" должно быть файлом одного из следующих типов: "+(a[0]||"Не допустимые форматы файлов.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Должно быть не менее "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" должно быть не менее "+t[0]+".":"Количество символов "+e(n)+" должно быть не менее "+t[0]+"."},not:function(e){var r=e.name;return"“"+e.value+"” не является допустимым "+r+"."},number:function(r){return e(r.name)+" должны быть числом."},required:function(r){return e(r.name)+" обязательное поле."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” должно начинаться действительным значением.":"Поле должно начинаться действительным значением."},url:function(e){e.name;return"Пожалуйста, укажите действительный URL."}};function x(e){var r;e.extend({locales:(r={},r.ru=z,r)})}export{n as ar,t as da,u as de,s as en,m as es,v as fr,d as he,y as it,h as ja,b as ko,k as nl,W as pt,x as ru};
