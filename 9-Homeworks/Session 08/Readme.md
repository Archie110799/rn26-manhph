10:
N  = 5
1L = a 
2L = b

a=1 b =1 -> 2*2l + 1*1l -> 3
a=1 b =2 -> 5 * 1l = 5
a=1 b =3 -> 5 * 1l = 5

b > 2a ->  k mua b, chi mua a->  N * 1l -> gia
b <=2a -> parseInt(N/2) * b (so lit <= N ) - 1l
2*2l + 1*1l
parseInt(N/2) * b + [N - (c*2)]* a

parseInt(5/2) = parseInt(N/2)  = c
N - (c*2) = 1 = d
c+d

[2,3,5,7,11,13,..]
N=100
- Phan tich thua so nguyen to:
N % 2 === 0 -> res.add(2), N-> 50 -> res= [2]
50 % 2 === 0 -> res.add(2), N-> 25 -> res= [2,2]
25 % 2 !== 0 pass
25 % 3 !== 0 pass
25 % 5 === 0 -> res.add(5), N-> 5 -> res= [2,2,5]
5 % 5 === 0 -> res.add(5), N-> 1 -> res= [2,2,5,5]
1 % 5

100 = 2*2*5*5  = 2^2 * 5^2 = 2^2 * 3^1 * 5 ^ 2 
(0,1,2) -> 3
(0,1) -> 2
(0,1,2) -> 3
(0,1,2,3,4,5) -> 6
Quy tac nhan to hop

- Dem uoc so cua n dua vao thua so nguyen to
2*2*5*5 -> 9

2^2*5^2 -> 3*3 = 9 -> Quy tac nhan to hop