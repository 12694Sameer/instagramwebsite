import React from 'react';


const Profile = () => {
    return (
        <div style={{ maxWidth: "550px", margin: "0px auto" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: "1px solid grey"
            }}>
                <div>
                    <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                        src="https://scontent.fdel11-2.fna.fbcdn.net/v/t1.0-9/53778706_2258920114365117_7614215324832890880_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=ND5p8Y0gWlAAX9oMcQC&_nc_ht=scontent.fdel11-2.fna&oh=8c2c56e3e593871deb0f29e4199f7ab4&oe=600F4AD6"
                    />
                </div>
                <div>
                    <h4>Sameer</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                        <h6>40 post</h6>
                        <h6>50 followers</h6>
                        <h6>20 following</h6>
                    </div>
                </div>
            </div>
            <div className="gallary">
                <img className="item" src="https://scontent.fdel11-2.fna.fbcdn.net/v/t1.0-9/53860970_2260343997556062_284595940466098176_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=0DZEDFJ9LTEAX8O2Bik&_nc_ht=scontent.fdel11-2.fna&oh=a7422cc97219a7c96477f575c9875227&oe=600DF2D8" />
                <img className="item" src="https://scontent.fdel11-2.fna.fbcdn.net/v/t31.0-8/13130928_1704525936471207_7655669927696319719_o.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=QSH6tfVyLKUAX9xkfNS&_nc_ht=scontent.fdel11-2.fna&oh=1bc176e85b1bada782d61e9b06334e81&oe=600F1AD0" />
                <img className="item" src="https://scontent.fdel11-2.fna.fbcdn.net/v/t1.0-9/13103378_991664087588061_804931735707223237_n.jpg?_nc_cat=104&ccb=2&_nc_sid=cdbe9c&_nc_ohc=Z6DxQx63h-QAX_eTAwm&_nc_ht=scontent.fdel11-2.fna&oh=9d76200f8ee1773e97e70dee6b452047&oe=600BE869" />
                <img className="item" src="https://scontent.fdel11-2.fna.fbcdn.net/v/t31.0-8/12307445_1648136425443492_6669317335462460138_o.jpg?_nc_cat=106&ccb=2&_nc_sid=2c4854&_nc_ohc=1T-nw8ROoBQAX8p7Gi3&_nc_ht=scontent.fdel11-2.fna&oh=617668459da0f87bd073fb9d2266771e&oe=600C58E8" />
                <img className="item" src="https://scontent.fdel11-2.fna.fbcdn.net/v/t31.0-8/12244819_1651403168462177_1557318944132416792_o.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_ohc=s78HrCvNA-QAX_kUEkL&_nc_ht=scontent.fdel11-2.fna&oh=24afa65399da4c956bd198b8c92a033c&oe=600C64D6" />
                <img className="item" src="https://scontent.fdel11-2.fna.fbcdn.net/v/t1.0-9/73420322_2426158804307913_6667890680695619584_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=OAkNJfOMqAQAX-DIgqL&_nc_ht=scontent.fdel11-2.fna&oh=8db50ab0f4055d3231ead50beda757c7&oe=600E37F7" />

            </div>
        </div>
    )
}

export default Profile;