var websql = {
    db: openDatabase('Personel', '1.4', 'SQL Db', 25 * 1024 * 1024),
create:function(){
   this.db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS person(id INTEGER PRIMARY KEY, ennda varchar(50),begda varchar(50),years varchar(50),Name varchar(50), LastName varchar(50),Mail varchar(50),phone varchar(50),cinsiyet varchar(5),password varchar(50),uyrugu varchar(50),tcno varchar(11),orgeh varchar(50),plans varchar(50),statu INTEGER,resim TEXT)', [], function () {
            console.log('tablo oluşturuldu.'); 
        },)
    })
},

select:function(tablename){
   this.db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM  '+tablename , [], function (islem, sonuc) {
            var resultArray = []
            var array = sonuc.rows
            for (var i = 0; i < array.length; i++) {
                resultArray.push(array[i]);
            }
             oModel.setProperty( "/"+tablename, resultArray)
        });  
    });
},
insert:function(tablename,colunm,getdata,value){
this.db.transaction(function (tx){
    tx.executeSql('INSERT INTO '+tablename+' ('+colunm+') VALUES ('+getdata+')', value);
})
},
delete:function(tablename,params){
   this.db.transaction(function (tx) {
        tx.executeSql('DELETE FROM '+tablename+' WHERE id=' + params, []
        );
    })
},
update:function(tablename,colunm,params,value){
   this.db.transaction(function (tx) {
        tx.executeSql('UPDATE '+tablename+' SET '+colunm+' where id='+params, value);
    });
},
drop:function(){
    this.db.transaction(function (tx) {
        tx.executeSql('DROP TABLE Arabalar',[],);
    });
},

selectid:function(tablename,id){
   this.db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM person  WHERE  id = '+id, [], function (islem, sonuc) {
            var resultArray = []
            var array = sonuc.rows
            for (var i = 0; i < array.length; i++) {
                resultArray.push(array[i]);
            }
             oModel.setProperty( "/selectPerson", resultArray)
        });  
    });
},
}