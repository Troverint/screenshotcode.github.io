var penumpang = []; //pertama membuat variabel array kosong dengan nama penumpang

var tambahPenumpang = function (namaPenumpang,penumpang){ //kedua membuat function dengan nama tambahPenumpang dan 2 parameters. parameters pertama bernama namaPenumpang dan parameters kedua adalah penumpang
    if(penumpang.length == 0){ //ketiga membuat kondisi if. jika isi array masih kosong atau 0. method push pertama akan dilakukan. yang mana ini digunakan untuk menambahkan nama penumpang pertama
               penumpang.push(namaPenumpang);//menambahkan penumpang pertama
              
               return penumpang;
    }else{ //keempat, kondisi saat array sudah ter isi alias sudah ada penumpang. 
        for(i= 0; i < penumpang.length; i++){ 
            if (namaPenumpang == penumpang[i]){ //kondisi if adalah jika user menambahkan nama penumpang yang telah ada, maka user akan diminta untuk menginput ulang nama dengan nama yang belum ada. jika user tetap meng input nama yang sama, kondisi ini akan terus terulang
                console.log(namaPenumpang + ' penumpang tersebut sudah ada, dimohon untuk input ulang'); 
                return penumpang;
            }else if(i == penumpang.length - 1 ){ //saat i nilainya sama dengan penumpang, kondisi akan berjalan. konidisi ini digunakan untuk menambahkan penumpang kedua dan seterusnya
                penumpang.push(namaPenumpang);
                return penumpang;
            }
            
        }
    }

}