//membuat bintang ke arah atas kanan
for (let i = 0; i < 5; i++) {​​​​
    ​​ console.log(' '.repeat(5 - i) + '*'.repeat(i + 1))
}​​​​​​

// membalikkan objek
const reverse = (s: string) => {
    return s.split('').reverse().join('');
    }
    let hello = 'Hello World!'
    console.log(reverse(hello))
