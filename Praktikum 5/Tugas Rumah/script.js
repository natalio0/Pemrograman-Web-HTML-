document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menambahkan nilai ke layar kalkulator
    function appendValue(value) {
        // Mengambil elemen layar kalkulator
        var display = document.getElementById('display');
        
        // Jika layar kosong dan nilai yang dimasukkan adalah 0 atau titik
        if (display.value === '0' && value !== '.') {
            display.value = '';
        }
        
        // Menambahkan nilai ke layar kalkulator
        display.value += value;
    }

    // Fungsi untuk membersihkan layar kalkulator
    function clearDisplay() {
        document.getElementById('display').value = '0';
    }

    // Fungsi untuk menghitung hasil yang dimasukkan
    function calculate() {
        var expression = document.getElementById('display').value;
        var result;
        try {
            result = eval(expression);
        } catch (error) {
            result = 'Error';
        }
        document.getElementById('display').value = result;
    }

    //Klik tombol
    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('click', function() {
            var value = this.textContent;
            if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculate();
            } else {
                appendValue(value);
            }
        });
    });

    // Set nilai default jika kalkulator belum diinput
    var display = document.getElementById('display');
    if (display.value === '') {
        display.value = '0';
    }
});
