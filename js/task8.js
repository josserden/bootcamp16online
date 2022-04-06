// todo Метод forEach

/*
 * Виконайте рефакторинг коду, використовуючи метод для Each і стрілочні функції.
 */

function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  nameList.forEach((element, index) => {
    console.log(`${element} : ${phoneList[index]}`);
  });
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
