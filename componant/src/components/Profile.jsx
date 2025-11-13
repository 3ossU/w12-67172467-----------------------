import human from './img/human.png'


const Profile = () => {
    return (
        <div>
            <div className="d-flex bg-light justify-content-center mt-3">
                 <img style={{ width: '450px', height: '500px' }} src={human} alt="Profile" />
            </div>
            <div className="text-center" >
                <h1 className="text-black">ชื่อ สุรวัศ แสงเจริญสุขเลิศ 67172467 อายุ 20</h1>
                <h1 className="text-black">มหาลัยศรีปทุม คณะ:เทคโนโลยีสารสนเทศ สาขา:วิทยาการคอมพิวเตอร์ ชั้นปีที่ 2</h1>
                
            </div>
        </div>

    );
}

export default Profile;