
let td = [0, 10, 20, 30, 40, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550]

let vd = [19.34, 14.71, 11.55, 8.73, 6.89, 5.24, 4.16, 3.14, 2.51, 1.89, 1.51, 1.19, 0.94, 0.75, 0.59, 0.48, 0.38, 0.31, 0.25, 0.21, 0.17, 0.15, 0.12, 0.11, 0.09, 0.07, 0.06, 0.06, 0.05, 0.04, 0.04, 0.03, 0.03, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.00, 0.00, 0.00]

let tc = [0, 10, 20, 30, 40, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680]

let vc = [0, 0.25, 0.27, 0.28, 0.30, 0.33, 2.40, 6.51, 9.06, 11.20, 12.71, 13.96, 14.84, 15.56, 16.14, 16.60, 16.92, 17.27, 17.53, 17.76, 17.94, 18.15, 18.26, 18.38, 18.50, 18.59, 18.69, 18.76, 18.82, 18.87, 18.94, 18.98, 19.03, 19.08, 19.12, 19.16, 19.20, 19.22, 19.25, 19.27, 19.30, 19.32, 19.34, 19.36, 19.38, 19.39, 19.42, 19.43, 19.44, 19.45, 19.46, 19.49, 19.49, 19.50, 19.50, 19.54, 19.53, 19.54, 19.54, 19.54, 19.55, 19.55, 19.56, 19.57, 19.58, 19.58, 19.59, 19.60]

const x_de_vc_ln = vc.map(n => parseFloat((Math.log(1 - (n / 20))).toFixed(4)))

let totalX = 0
x_de_vc_ln.forEach(n => totalX += n)

let totalY = 0
tc.forEach(n => totalY += n)

const x_cuadrado = x_de_vc_ln.map(n => parseFloat((Math.pow(n, 2)).toFixed(4)))

let totalX2 = 0
x_cuadrado.forEach(n => totalX2 += n)

let x_por_y = []

for (let i = 0; i < tc.length; i++) {
  x_por_y.push(parseFloat((tc[i] * x_de_vc_ln[i]).toFixed(4)))
}

let totalXY = 0
x_por_y.forEach(n => totalXY += n)

console.log('x_de_vc_ln')
console.log(x_de_vc_ln)
console.log(totalX)
console.log('tc')
console.log(tc)
console.log(totalY)
console.log('x_por_y')
console.log(x_por_y)
console.log(totalXY)
console.log('x_cuadrado')
console.log(x_cuadrado)
console.log(totalX2)

