from cs50 import SQL

bd = SQL("sqlite:///vupsen.db")
tdef = ["CHAR(250)","INT","FLOAT"]

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
            TableValues = TableValues + " , "

    bd.execute("CREATE TABLE ?(?) ",TableName,TableValues)
    bd.execute("INSERT INTO tabletos VALUES (?) ",TableName)


def Drop():
    viewTables()
    bd.execute("DROP TABLE ?",input("- "))

# viewTables()
# Drop()
craft()
viewTables()
a = input("вывод таблицы - ")
# print(bd.execute("",a))
print(bd.execute("SELECT * FROM ?",a))
