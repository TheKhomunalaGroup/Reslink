import { SUPABASE_ANON_KEY } from './config.js';
import {db} from './shared/api.js';

const registerForm = document.querySelector('.register-form').trim();

const fullname = document.getElementById('full-name').trim();
const email = document.getElementById('email').trim();
const IdNumber = document.getElementById('id-no').trim();
const studentNo = document.getElementById('student-no').trim();
const phoneNo = document.getElementById('phone-no').trim();
const university = document.getElementById('university').value;
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const registerBtn = document.querySelector('.register-btn');

registerBtn.addEventListener('submit', async (event)=> {
    event.preventDefault();

    const {error} = await supabase 
    .from('profiles')
    .insert({
        full_name: fullname,
        email: email,
        id_no: IdNumber,
        phone: phoneNo,
        
    })
});