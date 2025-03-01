// 动态数字效果
$('.count').each(function() {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// 利率数据（示例）
const rates = [
    { period: "1周", rate: 3.0 },
    { period: "2周", rate: 3.5 },
    { period: "1月", rate: 4.0 },
    { period: "半年", rate: 5.0 },
    { period: "--", rate: 1.0 }
];

// 初始化利率卡片
rates.forEach(rate => {
    $('.rate-cards').append(`
        <div class="card">
            <h3>${rate.period}定期</h3>
            <p class="rate">${rate.rate.toFixed(2)}%</p >
            <p>${getRateDesc(rate.period)}</p >
        </div>
    `);
});

function getRateDesc(period) {
    // 返回对应的描述文字
}
