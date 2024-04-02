const labels = ['Ngày 1', 'Ngày 2', 'Ngày 3', 'Ngày 4', 'Ngày 5'];
const data = {
  labels: labels,
  datasets: [{
    label: 'Màu đỏ',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [50, 75, 60, 80, 70],
  },
  {
    label: 'Màu vàng',
    backgroundColor: 'rgb(255, 205, 86)',
    borderColor: 'rgb(255, 205, 86)',
    data: [30, 40, 55, 45, 65],
  },
  {
    label: 'Màu xanh',
    backgroundColor: 'rgb(54, 162, 235)',
    borderColor: 'rgb(54, 162, 235)',
    data: [20, 35, 45, 35, 55],
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        ticks: {
            stepSize: 10, // Khoảng cách giữa các giá trị
            callback: function(value, index, values) {
              if ([0, 10, 20, 30, 50].includes(value)) {
                return value;
            }
            return ''; // Trả về chuỗi rỗng cho các giá trị không cần hiển thị
          }
        },
        
      }
    }
  },
};
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
