from cs50 import SQL

bd = SQL("sqlite:///vupsen.db")
tdef = [" CHAR(250) "," INT "," FLOAT "]
c = 'COL'
# табличка хранящая все названия других таблиц
bd.execute("CREATE TABLE tabletos(NAME CHAR(50) NOT NULL, COL INT)")

def viewTables():
    tables = bd.execute("SELECT * FROM tabletos")

    colls = list(tables[0].keys())
    s = ''
    for j in range(len(colls)):
        a = str(colls[j])
        br = 15 - len(a)
        s = s + a + ' '*br
    print(s)
    print()
    for i in range(len(tables)):
        s = ''
        for j in range(len(colls)):
            a = str(tables[i][colls[j]])
            br = 15 - len(a)
            s = s  + a + ' '*br
        print(s)


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
    s = "CREATE TABLE " + TableName + " ( " + TableValues + ") "
    bd.execute(s)


def Drop():
    viewTables()
    a = input("- ")
    bd.execute("DROP TABLE ?",a)
    bd.execute("DELETE FROM tabletos where NAME = ?",a)

def viewValues(name):
    a = name
    tables = bd.execute("SELECT * FROM ?",a)
    colls = list(tables[0].keys())
    s = ''
    for j in range(len(colls)):
        a = str(colls[j])
        br = 15 - len(a)
        s = s + a + ' '*br
    print(s)
    print()
    for i in range(len(tables)):
        s = ''
        for j in range(len(colls)):
            a = str(tables[i][colls[j]])
            br = 15 - len(a)
            s = s  + a + ' '*br
        print(s)

def insert():
    a = input("Название таблицы - ")
    viewValues(a)
    n = bd.execute("SELECT COL FROM tabletos WHERE NAME = ? ;",a)[0]['COL']
    InpVal = ''
    for i in range(n):
        val = input("Введи данные (если данные строковые - ставь ''): ")
        InpVal = InpVal + val
        if i < n-1:
            InpVal = InpVal + " , "
    s = "INSERT INTO " + a + " VALUES( " + InpVal + " ) ;"
    bd.execute(s)



def delete():
    a = input("Название таблицы - ")
    viewValues(a)
    key = bd.execute("SELECT * FROM ? ;",a)
    colls = list(key[0].keys())
    print('Выберите столбец с данными: ')
    for i in range(len(colls)):
        print(i,'-',colls[i])
    Q = colls[int(input(" - "))]
    V = input("Введите данные для удаления: ")
    s = "DELETE FROM " + a + " WHERE " + Q +" == " + V
    bd.execute(s)




selector = -1

while selector != 0:
    print("Меню выбора:\n1 - Вывод названий таблиц\n2 - Вывод содержимого таблицы\n3 - Ввод данных в таблицу\n4 - удаление данных из таблицы\n5 - Создание таблицы\n6 - удаление таблицы\n0 - закончить работу")
    selector = int(input("Выбор: "))
    if selector == 1:
        viewTables()
    if selector == 2:
        viewValues(input("Название таблицы - "))
    if selector == 3:
        insert()
    if selector == 4:
        delete()
    if selector == 5:
        craft()
    if selector == 6:
        Drop()
