function calculateBMI() {
    let berat = document.getElementById("berat").value;
    let usia = document.getElementById("usia").value;
    let tinggi = document.getElementById("tinggi").value;
    let bmi = 0;
    let status = "";
    
    //menghitung BMI
    if(berat > 0 && usia > 0 && tinggi > 0) {
        bmi = (berat / ((tinggi / 100) * (tinggi / 100))).toFixed(1);
    } else {
        alert('Harap isi semua data dengan benar');
        return;
    }

    //menentukan hasil status BMI
    if(bmi < 18.5) {
        status = 'Berat badan anda termasuk dalam kategori "Kekurangan Berat Badan"';
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        status = 'Berat badan anda termasuk dalam kategori "Normal (ideal)"';
    } else if(bmi >= 25 && bmi <= 29.9) {
        status = 'Berat badan anda termasuk dalam kategori "Kelebihan Berat Badan"';
    } else {
        status = 'Berat badan anda termasuk dalam kategori "Obesitas"';
    }

    console.log(bmi);
    console.log(status);
    //menampilkan hasil status BMI
    document.getElementById("result-status").innerHTML = status;
    document.getElementById("result-bmi").innerHTML = bmi;
}