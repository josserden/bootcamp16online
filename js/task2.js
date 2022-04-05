//todo Example 2 - Деструктуризація
/*
 * Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
 */

function printContactsInfo(params) {
  const { names, phones } = params;

  const nameList = names.split(',');
  const phoneList = phones.split(',');

  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// Було
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Очікується
printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
