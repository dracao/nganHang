function tinhKQ(){
    var thuNhap = document.getElementById("thuNhap").value;
    var canVay = document.getElementById("canVay").value;
    var laiSuat = document.getElementById("laiSuat").value;
    var thoiHan = document.getElementById("thoiHan").value;


    thuNhap = Number(thuNhap)
    canVay = Number(canVay)
    laiSuat = Number(laiSuat)
    thoiHan = Number(thoiHan)

    var tienCoTheTra = thuNhap * 0.6
    var soTienPhaiTra = (canVay * (1 + laiSuat)) / thoiHan
    var alertTag = document.getElementById("result")  
    var ketQua

    alertTag.innerHTML =""
    if((thuNhap < 0 || canVay < 0 || laiSuat < 0 || thoiHan < 0) || (thuNhap =="" || canVay ==""|| laiSuat =="" || thoiHan =="")){
        alert("Nhập lại đi")
    }else{
        if(tienCoTheTra > soTienPhaiTra){     
            ketQua = document.createElement("p")
            ketQua.textContent = "bạn  đủ điều kiện " 
            document.getElementById("result").style.backgroundColor = "aqua"

    
        }else{           
            ketQua = document.createElement("p")
            ketQua.textContent = "bạn không đủ điều kiện"
            document.getElementById("result").style.backgroundColor = "red"
    
        }
    }
    
    document.getElementById("result").style.display = "block"
    
    alertTag.appendChild(ketQua)
}

kiemTra.addEventListener("click", function(e) {
    e.preventDefault();
    tinhKQ();
})