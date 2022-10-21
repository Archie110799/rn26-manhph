# DOC https://viblo.asia/p/tham-chieu-va-tham-tri-trong-javascript-RQqKL6X0l7z

# Kiểu tham trị (Value Types)
- Dùng cho các kiểu dữ liệu nguyên thuỷ: String, Number, Boolean, BigInt, Symbol, undefined, null. 
- Lưu lại giá trị trong ô nhớ, khi gán cho biến khác và sửa thì sẽ không làm thay đổi giá trị trước khi gán.

Ví dụ 1:
let a = 1;
//Tạo ra biến a và lưu giá trị của a vào ô nhớ - 1 

let b = a;
//Tạo ra biến b, sao chép giá trị của biến a và lưu vào ô nhớ mới - 1

a = 2;
//Sửa giá trị của biến a và cập nhật lại ô nhớ - 2

console.log(b) //1

-> Như vậy, giá trị của a và b lưu ở hai ô nhớ khác nhau nên việc sửa ở ô nhớ này sẽ không ảnh hưởng đến ô nhớ khác.

# Kiểu tham chiếu (Reference Types)

- Được dùng cho các kiểu dữ liệu phức tạp: Object, Array, Function. 
- Khi gán: 
+ Bản chất sẽ lưu lại địa chỉ ô nhớ chứa giá trị chứ không lưu giá trị
+ Gán cho một biến khác thì sẽ gán địa chỉ này 
và khi sửa thì địa chỉ này không đổi nên 
các biến trỏ đến cùng địa chỉ này sẽ thay đổi 
khi có một cái nào đó thay đổi

Ví dụ 2:
let a = { name: "cat" }
//Tạo ra biến a, lưu giá trị của a vào ô nhớ và gán lại địa chỉ ô nhớ cho biến a (a = #a001)

let b = a
//Tạo ra biến b và gán giá trị của biến a cho b, ở đây chính là địa chỉ địa chỉ ô nhớ của a (b =#a001)

a.name = "dog"
//Sửa giá trị của biến a thì giá trị trong ô nhớ được cập nhật

console.log(b) // { name: "dog" }

Như vậy, a và b cùng lưu lại địa chỉ của một ô nhớ, khi một biến thay đổi thì giá trị trong ô nhớ thay đổi mà địa chỉ ô nhớ không thay đổi nên bất kỳ biến nào trỏ đến địa chỉ này đều bị thay đổi theo.

Ví dụ 3: 
const a = {
    id: 1, 
    info: {
        name: "John",
        age: 23
    }
}

Trong ví dụ trên ta thấy có hai object lồng nhau và cứ là object thì sẽ lưu theo kiểu tham chiếu. Đầu tiên, đi từ trong ra ngoài info sẽ được lưu vào ô nhớ và được gán cho một địa chỉ (info: #a001) sau đó a sẽ được lưu vào ô nhớ với giá trị { id: 1, info: #a001 } và gán lại địa chỉ của ô nhớ đó (a = #a002). Vậy nếu ta gán info cho một biến khác và thay đổi nó thì sẽ như thế nào?

const Info = a.info
Info.name = "David"
console.log(a.info.name)//"David"

Qua ví dụ này ta thấy một điều khá lạ là Info là hằng số tại sao lại có thể thay đổi được? Thực chất ở đây không phải là đang sửa giá trị của biến Info mà là sửa giá trị trong ô nhớ của nó còn nếu ta gán Info = b thì sẽ lỗi ngay bởi việc gán này sẽ làm thay đổi giá trị của nó.

# Truyền tham số dạng tham trị và tham chiếu
- Khi truyền tham số dạng tham trị vào trong một hàm thì 
thực chất trong hàm sẽ tạo ra một biến rồi gán bằng 
tham số truyền vào và cũng do tính chất của tham trị 
nên trong hàm có thay đổi thế nào thì giá trị truyền vào bên ngoài cũng không ảnh hưởng.
- Còn đối với kiểu tham chiếu, do tính chất của nó thì 
việc gán chỉ là gán địa chỉ ô nhớ lưu trữ giá trị nên việc 
thay đổi giá trị bên trong hàm 
vẫn sẽ ảnh hưởng đến giá trị bên ngoài.

# Tạo ra một object mới mà không làm ảnh hưởng đến object cũ 
- Thì ta có thể:
+ clone obj bằng spread operator, việc clone này sẽ tạo ra một object mới và lấy tất cả giá trị của object cũ vào object mới.
+ Tối ưu nhất sử dụng: let b = JSON.parse(JSON.stringify(a));