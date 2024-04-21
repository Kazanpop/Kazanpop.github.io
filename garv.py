from cs50 import SQL

b = SQL("sqlite:///viNEGRet.db")

TypeList = ["FLOAT", "INT", "CHAR(200)"]

# b.execute("CREATE TABLE SHNOPA (NAME CHAR(200) NOT NULL)")

def conclusion():
    a = b.execute("SELECT * FROM SHNOPA")
    for i in a:
        print(i)


def drop():
    tabName = input("Введите название таблицы: ")
    b.execute("DROP TABLE ?",tabName)
    b.execute("DELETE FROM SHNOPA WHERE NAME == ?",tabName)


def creation():
    value = ''
    print("Режим создания таблицы")
    tabName = input("Введите название таблицы: ")
    n = int(input("Сколько столбцов в таблице: "))
    for i in range(n):
        collName = input("Введите название столбца: ")
        print("Выберите тип данных столбца: ")
        for j in range(len(TypeList)):
            print(" - ",j," - ",TypeList[j])
        collType = int(input(" - "))
        value = value + collName + " " + TypeList[collType] + " "
        if i < n-1:
            value = value + ", "


    s = "CREATE TABLE " + tabName + " ( " + value + " ) "
    b.execute(s)
    b.execute("INSERT INTO SHNOPA VALUES(?)",tabName)


selector = -1
while selector != 0:
    print("Меню выбора:\n1 - Вывод названий таблиц\n2 - Вывод содержимого таблицы\n3 - Ввод данных в таблицу\n4 - удаление данных из таблицы\n5 - Создание таблицы\n6 - удаление таблицы\n0 - закончить работу")
    selector = int(input("Выбор: "))
    if selector == 1:
        conclusion()
    if selector == 2:
        
    # if selector == 3:

    # if selector == 4:

    if selector == 5:
        creation()
    if selector == 6:
        drop()

