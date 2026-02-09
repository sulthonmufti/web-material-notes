function cekPersyaratanLogin(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const login_google = document.getElementById('loginGoogle').checked;

    //Logika Perbandingan
    const email_valid = email.includes('@');
    const password_valid = password.length >=6;

    //Kondisi: (Email AND Password benar) ATAU Google login
    const bisa_login = (email_valid && password_valid) || login_google;

    const html = `
        <h4>${bisa_login ? '✅ Login Berhasil!' : '❌ Login Gagal!'}</h4>
        <p><strong>Email valid (mengandung @): </strong>${email_valid ? 'Ya ✓' : 'Tidak ✗'}</p>
        <p><strong>Password valid (minimal 6 karakter): </strong>${password_valid ? 'Ya ✓' : 'Tidak ✗'}</p>
        <p><strong>Login Google: </strong>${login_google ? 'Ya ✓' : 'Tidak ✗'}</p>
        <p style="font-size: 12px; color: gray; margin-top: 10px;>
            Rumus: (${email_valid} && ${password_valid}) || ${login_google} = ${bisa_login};
        </p>
    `;
    document.getElementById('hasil-login').innerHTML = html;
}