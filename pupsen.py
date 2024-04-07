from cs50 import SQL

bd = SQL("sqlite:///vupsen.db")
tdef = [" CHAR(250) "," INT "," FLOAT "]
c = 'COL'
# табличка хранящая все названия других таблиц
# bd.execute("CREATE TABLE tabletos(NAME CHAR(50) NOT NULL)")

def viewTables():
    tables = bd.execute("SELECT * FROM tabletos")
    print(tables)

def craft():
    print("Режим создания таблиц:")
    TableName = input("Впишите название таблицы: ")
    TableValues = ""
    n = 0
    while n < 1:
        n = int(input("Сколько столбцов будет иметь ваша таблица? Значение: "))
    for i in range(n):
        cell = input("Введите название столбца: ")
        print("Выберите тип данных:")
        for j in range(len(tdef)):
            print(j,tdef[j])
        cellvar = int(input("Выбор:"))
        TableValues = TableValues + cell + tdef[cellvar]
        if i < n-1:
            TableValues = TableValues + "NOT NULL , "
    rrr = "test CHAR(200)"
    # !!!!!!!!!!!!!!!!!!!1
    bd.execute("CREATE TABLE ? (?,?) ",TableName,TableValues,rrr)
    bd.execute("INSERT INTO tabletos VALUES (?,?) ",TableName,n+1)


def Drop():
    viewTables()
    a = input("- ")
    bd.execute("DROP TABLE ?",a)
    bd.execute("DELETE FROM tabletos where NAME = ?",a)

def viewValues():
    a = input("Название таблицы - ")
    print(bd.execute("SELECT * FROM ?",a))

def insert():
    a = input("Название таблицы - ")
    print(bd.execute("SELECT * FROM ?",a))
    n = bd.execute("SELECT COL FROM tabletos WHERE NAME = ?",a)[0]['COL']
    # print(n)
    InpVal = ''
    for i in range(n):
        val = input("Введи данные: ")
        InpVal = InpVal + val
        if i < n-1:
            InpVal = InpVal + " , "

    bd.execute("INSERT INTO ? VALUES(?)",a,InpVal)

selector = -1

while selector != 0:
    print("Меню выбора:\n1 - Вывод названий таблиц\n2 - Вывод содержимого таблицы\n3 - Ввод данных в таблицу\n4 - удаление данных из таблицы\n5 - Создание таблицы\n6 - удаление таблицы\n0 - закончить работу")
    selector = int(input("Выбор: "))
    if selector == 1:
        viewTables()
    if selector == 2:
        viewValues()
    if selector == 3:
        insert()
    # if selector == 4:
        #
    if selector == 5:
        craft()
    if selector == 6:
        Drop()
