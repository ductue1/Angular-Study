//Biến
let luotdi = 1; //1 = white_chess, 2 = black_chess
let tongdong = 10;
let tongcot = 10;
let currentcolumn = -1;
let currentrow = -1;
//Lưu hướng đi [dòng, cột]
let directions = ['-1,-1', '-1,0', '-1,1', '0,-1', '0,1', '1,-1', '1,0', '1,1'];
let arr = new Array(tongdong); //0 = no_chess, 1 = white_chess, 2 = black_chess

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
    document.body.appendChild(banco);
    for(let i = 0; i < tongdong; i++)
    {
        arr[i] = new Array(tongcot);
        for(let j = 0; j < tongcot; j++)
        {
            //Mảng
            arr[i][j] = 0;
            //Ô bàn cờ
            let obanco = document.createElement(`div`);
            obanco.className = `obanco`;
            obanco.id = 'd' + i + 'c' + j;
            obanco.style.backgroundImage = "url('" + window.trangthai.no_chess + "')";
            document.getElementById(`banco`).appendChild(obanco);
            //Add event
            obanco.addEventListener(`click`, function(){
                GetPosition(this);
                if(arr[currentrow][currentcolumn] == 0 )
                {
                    DoiTrangThai();
                    KiemTra();
                    luotdi == 1 ? luotdi = 2 : luotdi = 1;
                }
            });
            obanco.addEventListener(`mouseenter`, function(){
                GetHoverMouseEnter(this);
            });
            obanco.addEventListener(`mouseout`, function(){
                GetHoverMouseOut(this);
            });
        }
        let div = removeFloat();
        document.getElementById(`banco`).appendChild(div);
    }
}

function GetHoverMouseOut(obanco)
{
    //Lấy dòng && cột
    let dong = parseInt(obanco.id.substring(1, obanco.id.indexOf('c')));
    let cot = parseInt(obanco.id.substring(obanco.id.indexOf('c') + 1, obanco.id.length));

    //Kiểm tra
    if(arr[dong][cot] == 0)
    {
        document.getElementById(`d${dong}c${cot}`).style.backgroundImage = "url('" + window.trangthai.no_chess + "')";
    }
}

function GetHoverMouseEnter(obanco)
{
    //Lấy dòng && cột
    let dong = parseInt(obanco.id.substring(1, obanco.id.indexOf('c')));
    let cot = parseInt(obanco.id.substring(obanco.id.indexOf('c') + 1, obanco.id.length));

    //Kiểm tra
    if(arr[dong][cot] == 0)
    {
        if(luotdi == 1)
            document.getElementById(`d${dong}c${cot}`).style.backgroundImage = "url('" + window.trangthai.white_chess + "')";
        else
            document.getElementById(`d${dong}c${cot}`).style.backgroundImage = "url('" + window.trangthai.black_chess + "')";
    }
}

function GetPosition(obanco)
{
    //Lấy dòng && cột
    let dong = parseInt(obanco.id.substring(1, obanco.id.indexOf('c')));
    let cot = parseInt(obanco.id.substring(obanco.id.indexOf('c') + 1, obanco.id.length));
    //
    currentcolumn = cot;
    currentrow = dong;
}

function DoiTrangThai()
{
    arr[currentrow][currentcolumn] = luotdi;
    //đổi background
    if(luotdi == 1)
        document.getElementById(`d${currentrow}c${currentcolumn}`).style.backgroundImage = "url('" + window.trangthai.white_chess + "')";
    else
        document.getElementById(`d${currentrow}c${currentcolumn}`).style.backgroundImage = "url('" + window.trangthai.black_chess + "')";
}

function DoiMau(i, j, luotdi)
{
    if(luotdi == 1)
        document.getElementById(`d${i}c${j}`).style.backgroundImage = "url('" + window.trangthai.white_chess + "')";
    else
        document.getElementById(`d${i}c${j}`).style.backgroundImage = "url('" + window.trangthai.black_chess + "')";
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

function KiemTra()
{
    //Chạy theo hướng của mảng
    directions.forEach(function(item){
        let x = parseInt(item.substring(0, item.indexOf(',')));
        let y = parseInt(item.substring(item.indexOf(',') + 1, item.length));

        let i = currentrow;
        let j = currentcolumn;
        let luotditemp = luotdi == 1 ? 2 : 1;
        let count = 0;

        i += x;
        j += y;
        while(i >= 0 && j >= 0 && i <= parseInt(tongdong - 1) && j <= parseInt(tongcot - 1))
        {
            if(arr[i][j] == 0)
            {
                break;
            }

            if(arr[i][j] == luotdi && count == 0)
            {
                break;
            }

            if(arr[i][j] == luotditemp)
            {
                count++;
            }

            if(arr[i][j] == luotdi && count != 0)
            {
                //Chạy ngược
                while(i != currentrow || j != currentcolumn)
                {
                    i -= x;
                    j -= y;
                    arr[i][j] = luotdi;
                    DoiMau(i, j, luotdi);
                }
                break;
            }
            i += x;
            j += y;
        }
    });
}