import React from 'react';

const NewContents = () => {
    return (
        <div className='flex min-h-screen w-full bg-[#f1f1f1]'>

            {/* page 1*/}
            <div className="flex bg-white h-[calc(100vh-50px)] w-[750px] items-center flex-col mt-5 rounded-lg">
                <header className="flex p-10 font-sans text-4xl">
                    <b> Tiêu đề</b>
                </header>

                <main>

                    {/* voice */}
                    <voice className="flex w">

                    </voice>

                    {/* Phụ đề */}
                    <transcipt>
                        <b>Transcript (phụ đề)</b>
                        <p>Travelling is an amazing experience that opens our minds to new cultures and perspectives. It allows us to explore breathtaking landscapes, taste delicious cuisines, and meet fascinating people. As we embark on adventures, we immerse ourselves in local traditions, visit stunning landmarks, and engage in thrilling activities. Each journey brings us closer to understanding the world and ourselves. Additionally, travelling offers us a chance to break free from routine, discover hidden treasures, and create lifelong memories. So pack your bags, embrace the unknown, and let the wanderlust take you on an unforgettable adventure.</p>
                    </transcipt>

                    {/* tạm dịch */}
                    <transtation>
                        <b>Translation (tạm dịch)</b>
                        <p>Du lịch là một trải nghiệm tuyệt vời mà sẽ mở tâm hồn chúng ta với những nền văn hóa và góc nhìn mới. Nó cho phép chúng ta khám phá những cảnh đẹp tuyệt vời, thưởng thức ẩm thực ngon lành và gặp gỡ những người thú vị. Khi chúng ta bắt đầu cuộc phiêu lưu, chúng ta đắm chìm trong những truyền thống địa phương, thăm thú các địa danh nổi tiếng và tham gia vào những hoạt động thú vị. Mỗi chuyến đi đưa chúng ta đến gần hơn với việc hiểu biết thế giới và chính chúng ta. Hơn nữa, du lịch mang lại cơ hội thoát khỏi cuộc sống hàng ngày, khám phá những kho báu ẩn giấu và tạo ra những kỷ niệm suốt đời. Vì vậy, hãy chuẩn bị hành lý, đón nhận điều bất ngờ và để niềm khát khao khám phá dẫn bạn đến một cuộc phiêu lưu khó quên.</p>
                    </transtation>
                </main>

                <footer>

                </footer>
            </div>



        </div>

    );
};

export default NewContents;