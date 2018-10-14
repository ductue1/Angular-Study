//Biến
let luotdi = 0;
let tongdong = 10;
let tongcot = 10;
//Lưu hướng đi [dòng, cột]
let directions = ['-1,-1', '-1,0', '-1,1', '0,-1', '0,1', '1,-1', '1,0', '1,1'];

window.trangthai =
{
    no_chess: "asset/NO_CHESS.png",
    white_chess: "asset/WHITE_CHESS.png",
    black_chess: "asset/BLACK_CHESS.png"
}

function removeFloat()
{
    var div = document.createElement(`div`);
    div.style.clear = `both`;
    return div;
}

function TaoBanCo()
{
    let banco = document.createElement(`div`);
    banco.id = `banco`;
    console.log(document.body)
    document.body.appendChild(banco);
    for(let i = 1; i <= tongdong; i++)
    {
        for(let j = 1; j <= tongcot; j++)
        {
            //Ô bàn cờ
            let obanco = document.createElement(`div`);
            obanco.className = `obanco`;
            obanco.id = 'd' + i + 'c' + j;
            document.getElementById(`banco`).appendChild(obanco);
            //Add event
            obanco.addEventListener(`click`, function(){
                if(this.style.backgroundImage == "")
                {
                    DoiTrangThai(this);
                    KiemTra(this);
                    luotdi == 1 ? luotdi = 0 : luotdi = 1;
                }
            })
        }
        let div = removeFloat();
        document.getElementById(`banco`).appendChild(div);
    }
}

function DoiTrangThai(obanco)
{
    if(luotdi == 0)
    {
        obanco.style.backgroundImage = "url('" + window.trangthai.white_chess + "')";
        //luotdi += 1;
    }
    else
    {
        obanco.style.backgroundImage = "url('" + window.trangthai.black_chess + "')";
        //luotdi++;
    }
}

function KiemTraDong(obanco)
{
    //Lấy dòng && cột
    let dong = parseInt(obanco.id.substring(1, obanco.id.indexOf('c')));
    let cot = parseInt(obanco.id.substring(obanco.id.indexOf('c') + 1, obanco.id.length));
    let obanco_phu;

    //Kiểm tra bên trái
    if(cot != 0)
    {
        obanco_phu = document.getElementById(`d${dong}c${cot-1}`);
        if(obanco_phu.style.backgroundImage != "" && obanco_phu.style.backgroundImage != obanco.style.backgroundImage)
        {
            for(let i = cot - 2; i >= 1; i--)
            {
                obanco_phu = document.getElementById(`d${dong}c${i}`);
                if(obanco_phu.style.backgroundImage != "" && obanco_phu.style.backgroundImage == obanco.style.backgroundImage)
                {
                    for(let j = i + 1; j < cot; j++)
                    {
                        obanco_phu = document.getElementById(`d${dong}c${j}`);
                        DoiMau(obanco_phu);
                    }
                    break;
                }
                if(obanco_phu.style.backgroundImage == "")
                {
                    break;
                }
            }
        }
    }

    //Kiểm tra bên phải
    if(cot != tongcot)
    {
        obanco_phu = document.getElementById(`d${dong}c${cot+1}`);
        if(obanco_phu.style.backgroundImage != "" && obanco_phu.style.backgroundImage != obanco.style.backgroundImage)
        {
            for(let i = cot + 2; i <= tongcot; i++)
            {
                obanco_phu = document.getElementById(`d${dong}c${i}`);
                if(obanco_phu.style.backgroundImage != "" && obanco_phu.style.backgroundImage == obanco.style.backgroundImage)
                {
                    for(let j = i - 1; j > cot; j--)
                    {
                        obanco_phu = document.getElementById(`d${dong}c${j}`);
                        DoiMau(obanco_phu);
                    }
                    break;
                }
                if(obanco_phu.style.backgroundImage == "")
                {
                    break;
                }
            }
        }
    }
}

function KiemTra(obanco)
{
    //Lấy dòng && cột
    let dong = parseInt(obanco.id.substring(1, obanco.id.indexOf('c')));
    let cot = parseInt(obanco.id.substring(obanco.id.indexOf('c') + 1, obanco.id.length));

    //Chạy theo hướng của mảng
    directions.forEach(function(item){
        let x = parseInt(item.substring(0, item.indexOf(',')));
        console.log(x);
        let y = parseInt(item.substring(item.indexOf(',') + 1, item.length));
    });
}

function DoiMau(obanco)
{
    if(luotdi == 0)
    {
        console.log(obanco);
        obanco.style.backgroundImage = "url('" + window.trangthai.white_chess + "')";
        console.log(obanco);
    }
        
    else
        obanco.style.backgroundImage = "url('" + window.trangthai.black_chess + "')";
}