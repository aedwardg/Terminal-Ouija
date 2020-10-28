'use strict';

// Spooky artwork created using free tools by the folks at
// spikerog: https://www.ascii-art-generator.org/ and
// @patorjk: https://patorjk.com/software/taag/

const intro = `

▄▄▄█████▓▓█████  ██▀███   ███▄ ▄███▓ ██▓ ███▄    █  ▄▄▄       ██▓        ▒█████   █    ██  ██▓ ▄▄▄██▀▀▀▄▄▄      
▓  ██▒ ▓▒▓█   ▀ ▓██ ▒ ██▒▓██▒▀█▀ ██▒▓██▒ ██ ▀█   █ ▒████▄    ▓██▒       ▒██▒  ██▒ ██  ▓██▒▓██▒   ▒██  ▒████▄    
▒ ▓██░ ▒░▒███   ▓██ ░▄█ ▒▓██    ▓██░▒██▒▓██  ▀█ ██▒▒██  ▀█▄  ▒██░       ▒██░  ██▒▓██  ▒██░▒██▒   ░██  ▒██  ▀█▄  
░ ▓██▓ ░ ▒▓█  ▄ ▒██▀▀█▄  ▒██    ▒██ ░██░▓██▒  ▐▌██▒░██▄▄▄▄██ ▒██░       ▒██   ██░▓▓█  ░██░░██░▓██▄██▓ ░██▄▄▄▄██ 
  ▒██▒ ░ ░▒████▒░██▓ ▒██▒▒██▒   ░██▒░██░▒██░   ▓██░ ▓█   ▓██▒░██████▒   ░ ████▓▒░▒▒█████▓ ░██░ ▓███▒   ▓█   ▓██▒
  ▒ ░░   ░░ ▒░ ░░ ▒▓ ░▒▓░░ ▒░   ░  ░░▓  ░ ▒░   ▒ ▒  ▒▒   ▓▒█░░ ▒░▓  ░   ░ ▒░▒░▒░ ░▒▓▒ ▒ ▒ ░▓   ▒▓▒▒░   ▒▒   ▓▒█░
    ░     ░ ░  ░  ░▒ ░ ▒░░  ░      ░ ▒ ░░ ░░   ░ ▒░  ▒   ▒▒ ░░ ░ ▒  ░     ░ ▒ ▒░ ░░▒░ ░ ░  ▒ ░ ▒ ░▒░    ▒   ▒▒ ░
  ░         ░     ░░   ░ ░      ░    ▒ ░   ░   ░ ░   ░   ▒     ░ ░      ░ ░ ░ ▒   ░░░ ░ ░  ▒ ░ ░ ░ ░    ░   ▒   
            ░  ░   ░            ░    ░           ░       ░  ░    ░  ░       ░ ░     ░      ░   ░   ░        ░  ░
                                                                                                                
`;

const freddyKrueger = `

dddddddddddddddddddddddddddddddoooodddoodddddddddddddddddddddddddddddddddddoool:;,,;::loddddddddddddddddddddddddddddddddddddxxxxxxxxxxxxxxxxxxxxxxxxxx
ddddddddddooooddddddddddoddddddooooodddddddddddddoddddddddddddddddddol:,'......        .:oddddddddddddddddddddddddddddddddddxxxxxxxxxxxxxxxxxxxxxxxxxx
ddddddddddooooooodddoddddddddddoooodddddddddddddddddddddddddddddl:,..                    'lddddddddddddddddddddddxxddxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ddddddddddooooddddddddddddddddddddddddddddddddddddddddddddddo:,..                         .lddddddddddddddddddxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ddddddddddoooddddddddddddddddddddddddddddddddddddddddddddo:'.                            ..'ldddddxddddddddddxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
dddddddddddddddddddddddddddddddddddddddddddddddddddddddc,.                        ...    ...'lxxxxxxxxxxxxddxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ddddddddddddddddddddddddddddddddddddddddddddddddddddo:.                        ........    ..'lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ddxxxdddddddddddddddddddddddddddddddxxddddddddddddo:.                            .......    ..,dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkxxxxxx
ddxxxdddddddddddddddddddddddddddddddxddddddxdddddl'                               ........    .:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
dddxxxxdddddddddddddddddddddddddddddddddddddddddc.                                   ........  .oxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxddddddddddddddxxxdddddxxddddddddddddddddxo.                                           .. .cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkxxxxxxx
xxxxddddddddddddddddddddxxxxxxxdddddddddddxdddd;                                                .:ldxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkxkkxxxkkkkkxxxx
xxxxddddddddddddxxxxxdddxxxxxxxdddddxdddddoc;'.                                                    ..,;;:::clodxxxxxxxxxxxxxxxxxxxkkkkkkkkkxkkkkkkxxxx
xxxxxxxxdxxxxxxxxxxxxxxxxxxxxxxdddddxxdl;..                                                                  ..';coxxxxkxxxkkkkkkkkkkkkkkkkkkkkkxxxxkk
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdol:;,.                                                                           ..:oxkkkkkkkkkkkkkkkkkkkkkkkkkkxxxkk
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxdc;..                                                                                   .'cxkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxxxxxxxxxo:.                               ......................                                     .cxkkkkkkkkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxxxxxxxd:.                               ...''',,;;;::;;:::,'''','......                                'okkkkkkkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxxxxxxl.                                ..,;:::::cccclloddddlc:::::;;::,''...                            .lkkkkkkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxxxxd;                      .;.       ...,:lloooloxxxxxxxkkOkxdxxxxxdxdl::::;;'.                          .okkkkkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxxxd;                       ;o'      ...,:cldddlcclodxkOOOOOOkxkO000OOkxdooolll:'.                         'dkkkkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxxx;                       'lc.    ....,:loc;,''.....';:odxdlloddxxxxkkkkkxxxdddc'                          :kkkkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxxc.                       ,:;. ......,:ll:'.';:c:;'.....',clodxxdc,,;;;:::codkxdc.                         .dkkkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxd'                        ,:c'...','',:dl,',:lcokOx:...:lodxxxkOxdo;.  ......,lxd,                         .lkkkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxl.                        ,ll,...,::;;ldl;;cl:;;cxko,..;ldxddxkxddl;;clool;.. .:o;                          ckkkkOkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxx:                         ,co;..',collxkdlcclllodxddol:;:cldxxkxodlldo::oOO:...;c;.                         :OOOkOOkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxx,                        .,ld:..,:ccloxxxdooooodddxxxdolooooxOkdodxxdolllxko:,;cl:.                        .cOOkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxd'                  .','...;od:.,:::::oxddxxddxddxxdxdldxxxxxkOOkxxxdodddollooodddl.                        .oOkOOkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxx,             .;c;,,;;,,'.,col:;;;:clxxloxkxkdlkOxdol::looxkkxkOOOxddddxxxxddxxxxo.                        ,xOkOkkkkkkkkkkOOOkkkkkk
xxxxxxxxxxxxxxxxxxx:             .col;',,.,:'';:c::;,;;:dxclxdxxodxxl:cddc::cdxxk00Okddxddddddddxxxxd,                       .lOOOOOkkOkkkkkkOOOOOOkkk
xxxxxxxxxxxxxxxxxxko.              ,l;,:;.';.'::c;c:,::.,lddl:oxoooc'.':cccccldkO0Okxxxxxxxdooodxxxxx;                       ;kOOOOkkkkkkkkkkkkkOOOkkk
xxxxxxxxxxxxxxxxkkkx;             .:c;:lc,''..;cl;,:,;:..:dko,cdooc;,.......';ldxxxxdlcccllc:ccldddoo:.                     .dOOOOOkkkkkOOkkOOOOOOOkkk
xxxxxxxxxxxxxxxxkkkko.            'oo:cdo:'...;ll::o::c,',:oo:coool:cl:;,.    .';::,...,,:lccolclcccc:,.                   .oOOOOOOOOOOOOkkOOOOOOOOOkk
xxxxxxxxxxxxxxxxxkkkkc.            'cc:oo;.  .,ccc:ccc:,,,'coccodooollccc:,..   ..',:lodc;lccdoc::cc:','                  .lOOOOOOOOOkkkkkOOOOkkkOOOkk
xxxxxxxxxxxxxxxxkkkkkx;             ':,cdl'.. ,ccol;,::;:;.:ollodoool,..........',:clodxocolcolccc::;','                 .oOOOOOOOOOOkkkkOOOOOkkkOOOkk
xxxxxxxxxxxxxxxxxxkkkkx;             ';coo:,..'oOXOc,,;:c;':oodxollc'. .'..... ..  ..';loodollc::::ccldc.               ,dOOOOOOOOOOOkkkOOOOOOOOkkOOkk
xxxxxxxxxxxxxxxxxxxkkkkx;             .':ccc,.,ldxdc';:;;,':odxkdl:.   ...,:;.,c'... .':oodocol::ccllldc.             .:kOOOOOOOOOOOOkkkOOOOOOOOOOOOkk
xxxxxxxxxxxxxxxxxxxxkkkkx:.              ..,;',::cl:';:,,,,:ooxkxo,...         ..... .'cdxxdooc;:cclol:.             'oOOOOOOOOOOOOOOkOkOOOOOOOOOOOkkk
xxxxxxxxxxxxxxxxxxxxkkkkkkl.                .::;:c:..'c:;,,:lodddl:::::::;;;,'''.....':loxxdoc;;:ccloc.            .ckOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkk
xxxxxxxxxxxxxxxxxxxxxkkkkkkd;               .llclc'..'::;;,;llolol:ccccldxxxxddddoooooooooodl;,,;;;cl,           .cxOOOOOOOOOOOOOOOOOkkkkOOOOOOOOOOOkk
xxxxxxxxxxxxxxxxxxxxxkkkkkkkko'             .oxdll;..';cccc;:cll:;ll:,';clloollcloollllcooolc;;,,;;,.          'cxOOOOOOOOOOOOOkkOOOOOOkkkOOOOOOOOOOkk
xxxxxxxxxxxxxxxxxxxxxkkxkkkkkkxl,.          .lxd:,;..':cldxdlc:c;:oolc:cllc::::clcc::looodl:;;,..           .;okOOOOOOOOOOOkkkkkkOOkkkkkkkkkOOOkOOOkkk
xxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkko;.         :dd:,;. ':codxo;',;;:clollxkdoodxdollllooooodoooolccclllc:::;;;lddddxxkkkOOOOOkkkkkkkkkkkkkkkkkkOOOOOkkkk
xxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkxdc,.      :xo;';. .;cdkxo:,''',;:cccllloooddooodl:,';ldxxkxxxxdddoloododdollcclddlcldxkOOOOkkkOOOOOkkkkOOkkOOkkkkkO
xxxxxxxxxxxxxxxxxxxxxxxxxkkxkkkkkkxxkxdc,.   ,od:',. .,:dkxo:,'...:odxdddooooollllc::,';llcc;......,coxkkkkkkxxxxxxxdddooxOOOOOOOOOOOOOkkkkkkOOOkkkkkk
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdlc;:cll'.. .,;oxxd:.',,;cccxkxxxxxkkOOkdl:;;:cc;;;'..,:cdkOOOOOkkOOOOOOOOOOOOOkOOkOOOOOOOkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdoc:,.. .';lddl'.':c;,,';::;:cccloollllllcc;'';coxkkkkkkkkkkkOkOOOOOOOOOOOOOOkkkkkkOOOOkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdl:'''....,od:'..'coc;,''''''.....',cl:,,'',,;:lxkkkkkkkkkkkOOOOOOOOkkkkkkkkkkkkOOOOOOOkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxolc....  .'c;.'..':lc,...........';loc;..''..,coxkkkkkkkkxdddddddddoolllllllcccclxOkOOOOkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxo:l:...   ....'...,;,,. ..   ...,:oo:'...','.',;;;;;;,;;,...':clllooooddddddddollxOkOOkkkkkkkkkkkkkkkkkkO
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxl'';....  ..,:,...'''::,,::...',:dd:..     .,;;;;;;;,,,,'.':ldxxkkkOOOOOOOOOOOOOOOOOkkkkkkkkkkkkkkkkkkkkO
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxd;'..'. .   ..;,...''..,,..'..,;cdd;....','..',,,,'''.....'okkkkkkkkkkkkkkkkkkkOkkOOkOkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdc..''....   ..',..''..','...',clol'...,:clc,...''''....'..,okkkkkkkkOkkOOkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddllc,...,,..      .,.....',....';clc,...,:llc;'......... .,,...;lxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxxddxxxxxxxxxxxxxxoc:::,......''';'.      .'.....'.. ..,ll'....,:llc;'..    .. .,:dxl:'..':dkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOkkkkk
xxxxxxxxxxxxxxxxdddxxxxxxxxxxxxxxdc.........';::'''.      ..... ..  ..,cc.  ..,:llc;'..  ...  .'cclodddc,...:oxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOO
xxxxxxxxxxxxxxxxdddxxxxxxxxxxxxxxxc......'',:loc'.......   . .      .';'. ...,colc;'''..',;,.........',,'.....,,,,,;:clodxkkkkkkkkkkkkkkkkkkkkkkkOOOOO
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdl,.  ......':c;,.    ...  ..        ...  ...':odc;;;'. .',;,..'... ...............      ..,;:ldkOkOOkkOOOkkkkkkOOOOOOO
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxd:.....  ..   .. .    ..    .',.           ..',:lc:;;'.   ..''......            ......          .'cxkOOOkOOOOOOkOOOOOOOO
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxd;.....   .            .     .,.       ... ...',;;::,....   .''......              ...'.           ..:dkOkOOkkOOOOkkkOOOO
xxxxxxxxxxxxxkxxxxxxxxxxxxxdl,.                           ,,.      ..''..,,',;:;',,,,.  .',.......               .....            ..;lxkOOOOkOOkkOOOOO
xxkkxxxxxxxkkkkxxxxxxxxxxoc,..                            ....       ...';:;,..'cooo:...';;'..'.                   ....             ..'cxkkkkkOOOOkkkk
xxkkxxxkxxkkkkkkxxxxxxdl;...                               ;c.        ...;,'.  .,::,',:c:;;,,,cl'                    .'.              ...:dkOOOOOOkkkk
xxxkkkkkkkkkkkkkkkxxoc,.... .                              ...          .,,'.  ..,;::::::;;;;;,;;.                    ..               ....lkOOOOOkkkk
xxkkkkkkkkxkkkkkxxl;........                                ..           ..''.';cllc:::;;;,''','''..                                   ..  .ckOOOOOkkk
xkkkkkkkkkkxkkxd:'.......                                    .            ....;clolc::::::;,';:;,,''.  ..                   ..       .......'oOOOOkkOk
xkkkkkkkkkxxxo:......                                                    ....':clolllc::::;,;;;;;;''......     .....      ...................'lxOOkkkk
kkkkkkkkkxxo;.....                                                      ..  .':llooollcllooooooooc:,'......................................''..;dkkkkk
kkkkkkkkxo;. ...               ..                                       ..  .':llllllllooodollccc:;,,.....................................'''',,:dOkkk
kkkkkkkxc.  ...                                                       ......',,:looolllooodoollc::;;;....................................''''',,,cxkkO
kkkkkkd,......                                                  .............  .;cllllloooolcc::c:;;;'.....................  ............'''',,,,,:dOO
kkkkko,.......                                                 ........ .....   ..',;:clllccccccc:;;;;,...',,,'''...........   ..........'',,'''''':xO
kkkko'   ....                                                             .,;.  ....',;;;,;:;;,,;;;;;,..'',;;:;'''......'''.............'',,,,'....'lk
kkkd,.                                                                    .,:;. .'''.....,;;;'',,;;;;'',;;;,,,,'''''.....'''............'',,,''''''';d
kkd:...            .                     ....  ....                       ..':'  .''''''',,;;,;;;;;;,,,,,,,'...''''''....''''........ ...'','''',,''':
kxc.            .. ......              ..''..........                      ...'...',,,,,,,,;;;;;;;;;,,,''''''..''',,'''............... ..''''.'','''''
ko'             ..   .   ...         ..',,,,,,,,,''...                       ....',,,,,;;;;;;;;;;;;;;,,'.'','.....',,''..................''''''''''',,
x:.                .  ......  ........'',,,,,,,,,,,,,'.                        .',,,;,,;;;;;;;;;;;;;;;,'................      ........ .....'''''''',,
x;                     .........''',''''''',''''.''''''..                     .',,,,;,;;;;;;;;;;;;;;;;;..       ..........   .... ...   ..............
d,             .      ....',,;;;;;,,,,,,,,''''.......'''..                    ....'''',,,,;;;;;;;;;;;;;.         ................. ..   .....  .      
x,                 ...',,,,,;,,;;;,;;,;;;;,,,'''..   ...'...                  ...........''',,,;;;;;;;;.          ............  ..       ...      ... 
x:.             ...'',,,,,,,'',,,;,;;;;;;;;;,,,,,'..    ...'.                ..................''',,,;;.          ............  ...      ...    ....  
kc.           ..''',,',,,,,'...,,,,,;;;;,,,;;;;;;,,'..    ....                .....................'.''.            ..........  ...       ..     .... 
kl.         ...'''''''',,,,'....,,,,,,,,,,,,,;;;,,,,,,'.   ....                 ........................        ..   ................     .     ....  
xc.        ..''''..''',,,,,'.....',,,,,,,,,,,,,,,''''',,,.. ....        ....     .......................        ..    ...........  ...    .     ....  
x:.       ..''''..'.'',',,,'.....',,,,,,,,,,,'',''''''',,'.. ...        .'....    ......................        ..    ...........  ...          ....  


`;

const jasonVoorhees = `                                                                                
                                                                                                                                                      
                                                                     ..............                                                                   
                                                                ..,;:lloooooooooool:;,'.                                                              
                                                             .,:lododdddddddddddddoloool:,..                                                          
                                                          .':clooddxxxxxxxxxkkxxxxxdxxdolcc:,.                                                        
                                                        .':clllldxxkkkkkkkkkOkkkkkkkkxxdololc:,.                                                      
                                                       .,:clo:..lxxkkOOOOOOOOOOOOOOOOkko,.:ooc:;.                                                     
                                                      .,:clodl:lxkOOOOO0OO000000000OOOOkoclxdoc;,..                                                   
                                                     .';coodddooxkO000K000KK00O0K00000Okdoxkxdlc;'..                                                  
                                                    ..,:lodxd;..oO00KKKKKKKK0000KKKKK0Ox;.,xxdol:,...                                                 
                                                   ...':odxxxl:ok00KKKKK00000KKKK0KKKKKKkllkkxxoc,...                                                 
                                                  ..'..codxxxdoxO0KKKKXXKKK000KK0KKKXXXX0xxOOkkdo,....                                                
                                                  ..',:lodkkl..l00KK0kolxKXXKK0kolx0XXXXd..cOOkxo:,'..                                                
                                                  ...;codxkOxclOK000O;  :0XXKKKl. 'kXKKK0xldOOkxoc;....                                               
                                                 ....,:odxO000000000KkddO0KK0KK0xdkKK000KKKK0Okxdc;....                                               
                                                  ....:ldxkOOO00Okdolldddddxxkxddollldk000000Oxxdl'....                                               
                                                 ...'':oddxxkO00000Oxoc;,.'''''',:ldk0000OOkkkxxdl,....                                               
                                                 ...,;coodoc::::codxkO0Oxoc::codk00OOxoc::;:coddoc;,...                                               
                                                 ...,;clo:.       .'lxkxxkkOOOkkxxxo,.       .;llc:,'...                                              
                                                 ..',:cll.          .coodxkOOkxdool'          .:lc:;'...                                              
                                                ...';:cll,          .clodxOOOOxooll'          .clcc;,...                                              
                                                ...,;:ccll'        .;lcldxO0Okxdollc.        .clccc:,'..                                              
                                                ...';:cccll:..   .,clccldk000Okxoccll;.    .,llcccc:,'..                                              
                                                 ..,;:cccclloc::codoc:coxO0KK0Okdccloooc::coolllcc:;,'..                                              
                                                 ..';::::clllllooddoc:cox0KKK00kdccclooodoooolllcc:;,..                                               
                                                 ...';:cccllodddxxxoc:coxOKKKK0Ooc::ldxxddooolllcc:,...                                               
                                                  ...,;:cclooddxxkxlc::ldO0KK00ko:;:coxxdoooollcc;,'...                                               
                                                  .....,cloododxkkdc;,',;:cclcc:,,,,:okkdoodolc:,.....                                                
                                                   ....':clolclxkkd:'...  ....   ..':dkkxo:clc::,.'..                                                 
                                                    ...,;:c:,:dxxkxl;'...       ...,cdxxxdc,;c:;,'...                                                 
                                                    ...'','.,lodxxxxoc;,''.....',,:lodxddoo:..,,'...                                                  
                                                     .......;cloddxxxddolcccccclooodddddolc:'......                                                   
                                                       .  ..,::cloodooddddddddxxxxddxddolc:,'.  .                                                     
                                                          ..',;;:clooc:codxxxxxdoclddoolc;,'..                                                        
                                                          ...''..;loo'  ;ddddddc. .ldoc'.',...                                                        
                                                            ..'..;lllc,,cdddoodl;;ldol:..''..                                                         
                                                             ..',:cccccloooooooooooolc:,'..                                                           
                                                              ..',;::,';cllllllc;,;cc:;'..                                                            
                                                               ...,;;'..,cccccc;...;:;'..                                                             
                                                                ...,;:;;;::::::;;;;;,'..                                                              
                                                                  ..''..,,,,,,,,'.'''..                                                               
                                                                   .......'''........                                                                 
                                                                     ..............                                                                   
                                                                                                                                                     
`

const normanBates = `

WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWKo'.....,o0NWWWWWWWWWWWWWWWWWMMMMMMMMMMMMMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNWNNNNNXXXK0Oxdd
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWXk:......;d0NWWWWWWWWWWWWWWWMMMMMMMMMMMMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNXXKK0Okxx
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNKo,......,lONWWWWWWWWWWWWWMMMMMMMMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNXXK00OOkx
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNOl'.....';o0NWWWWWWWWWWWMMMMMMMMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNXXXKKK0Okx
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWXx:..';:;;:oOXWWWWWWWWWWWMMMMMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNXXXXKK00Okx
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWXkolcc:;;;;lxXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNXXXXKK00Okk
NNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWX0xlcc:,'',ckKNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNWNNNNNNNNXXXXKK00OOk
NNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWXOdc;,',;;:cdxkO0KNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNXXXXXKKK0OOO
NNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNKxc,,;;;;;::::cox0XWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNWWWWWNNNNNNNNXXXXXXXXXXKKK00OO
NNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNKxc;;;;;;;;;;;:cokKNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNXXXXXXXXXKKKK000O
NNNNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWNKxl:;;;;;,,,',:lx0XNNNNNNNNNNNXXXXNNWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXXXXXXXXKKKK000O
XNNNNNNNNNNNNNNNNNNNNNNNNWWNWWWWWWNNKOxoodkOOkxdoc;,,;;;;,,;ok0KKXNNNNXXK0KKKKKK000KKKXNNWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXXXXXXXXKKK0000O
XXXXXXXXXXNNNNNNNNNNNNNNXNNXK00Okxoc,.....',;::;,',,,,;;cloxOOkkxxO0K0kddxOOOOOkxxxdoloxOXNNXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXXXXXXXXKKKKK0000
XXXXXXXKkk0KXNNNNNNNNNXXXXKOd:,....    ...',,''...',,:odxxxxdlcclodxdc;;coxkkkkkxdlc::codk0KK00K0000KXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXXXXXXXXKKKKK0000
XXXXXXXKkxkkOO0KXXNXXXXXXK0kc...     .............'';ldxddolc:clddoc;,,,;:ccclool:;;:cllccokKKKKK00KXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXXXXXXXXKKKKKK0000
XXXXXXXKKK0OkdodkOKKXXXKK0d;..     ....'.......'''';:loolc;;:cllc::;,,,;;;:cccc:;;::ccc:::ldOKKKKKKKXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXXXXXXXKKKKKKK0000
KKKKKKKKKKKKK0OkkkxxxkO0Oo'... ......'........',,;:odlc:;,,;::;;,,,,'',,;:ccc:;;;:::::::cloodOKXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXXXXXXXXKKKKKKK0000
KKKKKKKKKKKKKXXKKK0kdool;.........''........',,;;:lol:,''',,,'',,''''',;:::;;;;;;;;,,;:cloooxkKXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNXXXXXXXXKXXKKKKKK000000
KKKKKKKKKKKKXXXXKXXKKOd;.  .....'..........''',;;:::;'''','''',''..'',;;;,,,,,,,''..';:cccldkk0XXXXXXNNNNNNNNNNNNNNNNNNNNNNNXXXXXXXXXXKKKKKKKK00000000
KKKKKKKKKKKKKKKKXXXK0x;.     ..............'''',;:c:'..'''''''''''',,''',;;,,''....';;;;;:lxkk0XXKKXXNNNNNNNNNNNNNNNNNNNNNXXXXXXXXXXXXXKKKKKK000000000
0000000KKKKKKKKKKKKOl.      .....  .....''''',:lxO0d,....''''''''',,'.',,,''......',,,,;;cdkkxOXXKKXXNNXXNNNNNNNXXXXXXXXNXXXXXXXXXXXXXXXKKKKKK0000000K
0000000KKKKKKKKKKKk;.              ....';;,;cdOXXXXk;....''''..''....''''.........'',,;;:clollkKXKKKXNNNNNNNNNNNNXXXXXXXXXXXXXNNNXXXXXXXXKKKKK000000KK
O0000000KKKKKKKK0d'    ....        ....';;:xKXXNNXX0l''......''....',''............',,;::;;;:lOXXKKKXNNNNNNNNNNNNNNXXXXXXXXXXNNXXXXXXXXXKKKKKK0000000K
OO000000KKKKKKKOo'........        .....,cokKNNNNXXXXk:''........'''.....  ........''',;;;;;:okKXKKKXXNNNNNNNNNNNNNXXXXXXXXXXXXXXXXXXXXKKKKKKK00000000K
OOO00000KKKKKK0o,.',,,'...        . ..;d0KKXXXXXXXXXKd;'......''''....  .............'',;ldxOKXXKKKKXNNNNNNNNNNNNNXXXXXXXXXXXXXXXXXXXKKKKKKK000KKK0000
OOO000KKKKXXX0d:,:lllc;,..       ...,ck0K0KKKKKXNXXXXKkl;...',,'...    ................':kKKKK00000KXNNNNNNNNNNNNNXXXXXXXXXXXXXXXXXXKKKKKKKKKKK0K000O0
OO0000KKKXXKKkoccllool:;..  . ... .:clxOkk0KK0KXNXKKKKKKk:'',''...  ...................':kXXK0OO00KKXNNNNNNNNNNNNNXXXXXXXXXXXXXXXXXXKKKKKKKKK000000000
OOO000KKKKKKKxc:;;::c:;'.....  .. ..,:ldk0KKK00KXNNXNXXXXKxo:'..  ......................;xXXK000KKKKXNNNNNNNNNNNNNXXXXXXXXXXXXXXXXKKKKKKKKKKK00000OO00
OOO0000KKKKKKkc'...........           ..;d0KKKKXXNNNNNNNNNXXO:.........................';dKKKKKKKKKKXNNNNNNNNNNNNNXXXXXXXXXXXKXXXKKKKKKKKKKKKK0000OO00
kkOO0000000KK0d'     ...                 .,:cccoOXXXXNNNNXXKKx,........................',lO0000KKK0KXNNNNNNNNNNNNNXXXXXXXXXXXXXXXKKKKKKKKKKKKKK000OO00
kkkOO0000000000d,                              .:O0kdlodxxxOK0o'........    .............,:okOkkO00KXNNNNNNNNNNNNNXXXXXXXXXXXXXXXKKKKKKKKKKKKK00000000
xxkOOOO0OO0O0000k:.                             .''..  ....':lo:....                  ...'',cdxxkO0KXNNNNNNNNNNNNNNXXXXXXXXXXXXXXKKKKKKKKKKKK000000000
xxxkOOOOOOOOO0000k:.                                      .....'..                    .......;lxO000KNNNNNNNNNNNNNNNXXXXXXXXXXXXXXKKKKKKKKKKK000000000
dxxkkkkOOOOOOOOOOOkl.                                    .........                   ....  ..';coxk0XNNNNNNNNNNNNNNNNXXXXXXXXXXXXXKKKKKKKKK0000000000K
ddxxkkkkkOOOOOOOOOOkd,.                                    ....                     ...   ...',,;:ldk0XNNNNNNNNNNNNNNXXXXXXXXXXXXXKKKKKKKKK0000000000K
oddxxxxkkkkkkkkkkkkOOkc.                                                           .   .......'',:cllodkO0KKXNNNNNNNNNNNNXXXXXXXXXXKKKKKKKK0000000000K
oddxxdxkkkkkkkxxxkkkkkxl,.                                                       .    ..........,;::::::cclodxO0XNNNNNNXNNNXXXXXXXXXKKKKKKKKK00000000K
oddddddxxxxxxdxxxxxxdxxxdc.                                                    .     ..............'',,,,,,;;:clox0KXNNNNNNNXXXXXXXXXKKKKKKKKK0000000K
looooodddddddddxdddoddddddo:.                                                      ......  .................'',;;:coOXNNNNNNXXXXXXXXXKKKKKKKKK00000000
llollooddddddooolllooooododkx;                                                   ......   ....    .............''''',cok0XNNXXXXXXXXXKKKKKKKKK00000000
cllccclooooollllcccclloooloOK0d,                                                .....   ....           ................';lkKXXXXXXXXXKKKKKKKKKKK00000O
:ccccclloollcccccc::cloolcoOXNXk;          .                                   ....       .     .     ....................;dKNNXXXXXXKKKKKKKKKKK000OOO


`

const hannibalLecter = `

MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNWMMNKkdOKXNNKKNMMWNKxodk0KK00OkxxddxOKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKl'cOO:.   ..''..;llc,.   .....         .,cdOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNXXKkol:'   ..                        .,,'.'',,,'.....;cdkKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXKd;'.';,.                                ,kXXKOO0kl'.,ldlc::okXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXd,...                                        .';,...     ,oddlc:;l0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK:                                                                  .:ood0WMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWMNo           .,.  ',;c'   .,,'        ...  ...',.                         .:kNMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0kX0,          :0Nk,..,kN0:..:0K0l.;dkxlxK0kol00OXXl.                          .;OWMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNl;o:         .'cKMWNX0OKWWX0OKWMMX0NMMWMMMMMWWMMMMMN0ko:.                        .lXMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOc.        .;okKXXNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXx:.                       cXMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXd,       .':d0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0o'                     .xMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKo'        ,kNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXx,                    ,kNMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkc.       .;xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXx'                   .lXMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOo:'        .l0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXo.                  '0MMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMWO:.          ,kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0;                 .xXWMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMWKl.           :KWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXo.            .,;cloOWMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMWO,            cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOl;.         'OWWWWWMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMNd.            lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWXo.        :XMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMWd.            ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;         oNMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMK;            'OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO'        ,KMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMO.           'OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk'       .kWMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMNl           .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNl        ,0MMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMK,           :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK,         cNMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMWk.          .kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.         'OMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMW0,           ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0'  ::     .dWMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMWk'            :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX: .xo      lWMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMWO'             :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK; ,Ol      lWMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMNc             .dWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx. :Kl      ,ONWMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMX;             .dWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX:  l0;     ...;xNMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMNl              ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWMMMMMMMMMMMMMMMMMMMMMMM0' .l:      c0koxNMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMWO,              .OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXOxddxdc:cokxokNMMMMMMMMMMMMMMMMk. ;:.      oWMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMWx.               :XMMMMMMMMMMMWX0OkxdolooxkO00KXNNNNXNWMMMMMMMNKkOOxl;.             cXMMMMMMMMMMMMMMMNl 'x:       :XMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMWk::o:            :XMMMMMWX0xoc;'.            ....'',l0WMMMMMMMNx;'.                 .lXMMMMMMMMMMMMMM0'.kXc        lNMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMWWWWo.           :XMMMW0l'.                       'dXWMMMMMMMMMWNXOx:.                :0WMMMMMMMMMMMNo.oNX:        .OWMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMWo            '0MMMX:                         .oXWWNKKKKKKNWMMMMWx.   ;kl.   .'::.  .cOWMMMMMMMMMO':XMX;  :o'    oWMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMWd.            lNWKo.         .'.    ;xd;      .oNWXOO0KKKKKKXWMNx,  .OWx.    .lX0d:. .dNMWMMMMMK:;0MMWd..xWXk;  oWMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMWo             .kNd;.        .kk.    'oXK;     .xWMMMMMMMMMWX00KNWXxokNMXd;',:dKWMMWKdldXMMMMMW0c:0WMMMNc;0MMM0,.oWMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMX:              ,0WXl        :0Kc.   .dNNk,   .:0WMMMMMMMMMMMMNKOk0NMMMMMMWNNWMMMMMMMMMMMMMMMNkcdXMMMMMWkdNMMMWd.dWMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMK;               :XNo'..  .,;cxOkl;'';:lol'   cXMMMMMMMMMMMMMMMMWKkdx0NWMMMMMMMMMMMMMMMMMMMWKdo0WMMMMMMM0ooloOW0o0MMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMX:   ...          cKNNX0xxKNO:'''.        .. .dWMMMMMMMMMMMMMMMMMMWXkoloONWMMMMMMMMMMMMMWN0xxONMMMMMMMMMO'   .kWNWMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMWk,'l0X0d'         'dXMMMMMMWNXkol'      ';. .OMMMMMMMMMMMMMMMMMMMMMMW0o::lkXWWMMMMMWWKkoloONWMMMMMMMMMMk.    oWMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMWXNWMWWWk.         .oNWWMMMMMWX00o,,;:cl:.  lNMMMMMMMMMMMMMMMMMMMMMMMMWNOl;,;clodolc::lxKWMMMMMMMMMMMMMx.  .:KWMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMNXNNl          :xdd0NWMMMMMWWNWWXx;   .kMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNOo:,,,;cokXWMMMMMMMMMMMMMMMWo  .oNMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMXKW0,          cxl:cdk0XNNNX0kd:.    ,0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWMMMMMMMMMMMMMMMMMMMMK;.'dNMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMN0KWd.         ,0WNK0000000OO0O:     .oXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXOOXWMMWNWMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMKONX:         .lNMMMMMMWWNXX0c.      .,xXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOkNMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMWO0WO.         'xOookkoc:,...           l0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNxckWMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMXkKNl          .                       .;xNMMMWMMMMMMMMMWKOKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXo,dNMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOxXO'                                 ,dxx0WMMMMMMMMMMW0; .:OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXx::kNMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWkd0l                                 '.  'lxxkkkxddoodl.   ,KMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXOkxookXWMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNxc:.                                    .:::;;;;;;:coo'  'dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMXl:x0XWMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx,                                      ',,,,,,,,'..   .coONMMMMMMMMMMMMMMMMMMMMMMMMMMMO:kMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXx,                                                      .kMMMMMMMMMMMMMMMMMMMMMMMMMMNolXMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                                   ,lxXMMMMMMMMMMMMMMMMMMMMMMMMMMOlOWMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx.                                                 '0MMMMMMMMMMMMMMMMMMMMMMMMMMMMNxxWMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx.                                                ;KWWMMMMMMMMMMMMMMMMMMMMMMMMMWOxKWWMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo                                 ';.     ,,     co;:lONMMMMMMMMMMMMMMMMMMMMMMK:.';:cxXMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXc                         ..     od'.    ;:     .:'. .cKMMMMMMMMMMMMMMMMMMMMNo.     ;KMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0;                       .l,   ..dx;,;dklcl,...  :0KOc'oNMMMMMMMMMMMMMMMMMMMO'     .dWMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0d:.                        ,c.'lkxl0WNNNWMXxOXXXKk:'dWMNo:KMMMMMMMMMMMMMMMMMMNl      ;KMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx,.                           ':'dWWdlXMMMMMM0lOMMMMMXl,kWNolXMMMMMMMMMMMMMMMMMM0'     .xWMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXc                             .,;xW0:dWMMMMWk,.kMMMMMMO',OklOWMMMMMMMMMMMMMMMMMWx,... .lXMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0;                             .,kNx;oKWMMMX: .xMMMMMMK;.o0KWMMMMMMMMMMMMMMMMMMXlcl'..:0MMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXc                              ;oc,cxNMMMWOc'oNMMMMMW00XMMMMMMMMMMMMMMMMMMMMMXOXO.  .;0WMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd.   .cxd'                      .':loddxxxl;oXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO..c:..xNMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOlcdKWMW0:                                 .dWMMMMMMMMMMMMMMMMMMMMMMMMMMWNWMMWx..ONk,.lKWMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWMMMMMMMXd.                               .dWMMMMMMMMMMMMMMMMMMMMMMMMMNO0WMMNl ;XMMXo.,kNMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNO0WMMMMMMMWk,                              .dNWMMMMMMMMMMMMMMMMMMMMMMMXkOWMMMNc.lNMMMNd,';lkKXNNXXK0kxdodONMMMM
MMMMMMMMMWNXXWMMMMMMMMMMMMMMMMMMMMWNX0ocOWMMMMMMMKddl.                         ;looxKWMMMMMMMMMMMMMMMMMMMMMW0x0WMMMMN:.kMMMMMWNKOdlc;,'....   .oKWMMMM
MMMMMMMWXx,..;lOXWMMMMMMMMMMMWXOdc;'..'kWWWMMMMMMk':KO;                       ;XMMMMMMMMMMMMMMMMMMMMMMMMMMNkdKWMMMMMX;;KMMMMMMMMMMWNKd.      'kWMMMMMM
MMMMMMNx,       ,o0WMMMMMWXko;.       .dKddXMMMMM0;.;0Xo.                     ;KMMMMMMMMMMMMMMMMMMMMMMMMW0oxXMMMMMMM0;lNMMMMMMMMMMMMM0'    .lKWMMMMMMM
MMMMMXc.          .;dk0ko;.            'd:,dKWMWWK;  ;KWk,                    .OMMMMMMMMMMMMMMMMMMMMMMMXxoONMMMMMMMMk;xWMMMMMMMMMMMWK:   .lKWMMMMMMMMM
MMMN0c.                                .;,.'xklkXk'   :XWXd.                  .oKWMMMMMMMMMMMMMMMMMMMNkldKWMMMMMMMMWo:0MMMMMMMMMMMNk, .;dKWMMMMMMMMMMM
MMNo.                                       .  cd;.   .oNMWKo.                  .lKWMMMMMMMMMMMMMMWNklo0WMMMMMMMMMMK;:XMMMMMMMMMMNOlcd0NMMMMMMMMMMMMMM
MMX:                                           .'      .xWMMWKo.                  'xNMMMMMMMMMMMWKdclOWMMMMMMMMMMMWo.;XMMMMMMMMMMWNWMMMMMMMMMMMMMMMMMM
MMX:                                                    .kWMMXo.                   .;xKNWMMMWNKxlco0NWMMMMMMMMMMMWk. cNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMW0o:.                                                  .dNWK;                       .,:llc:,,ckXWMMMMMMMMMMMMMM0;.,kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMWXko:,..                                             .c00l.                   ...        .kWMMMMMMMMMMMMMMMMX00XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMWWX0o'                                             .,,.               .cdOKKd'     .':kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMWXd;;,....                                                  .;lodokNMMMNkccodoxKNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMWWWNXK00Oxdl:,.                                   ..    .l0NWWMMMMMMMMMWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMWNKOdc,..                   .........;OKxolccOWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNX0kxo;,,'..       .'l0K000KKK0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNWNXKkdlccld0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

`

const annieWilkes = `

                                   ... ........................................   ....    ..    ......                        .                       
                                   ... ........................................ ......         .                                                      
                    ...            ... ..............................................                                                                 
                   ..               ....................  ...  .........           ........                                                           
                                    ........... ........  ...   .      ..                                                                             
                      .       .    ... ... ..... ........     ....      ..                                                                            
                  ..    .          ... ..  .... ... ...                   ....                                                                        
                      ..    ..  .. ...  . ...   ...  .. .                                                                                             
                        ..  . .;xo' ...   ..        .....      .. ..  ..  ...                                                                         
                        ..  ..;0WXo...   ....     ....           .............                                                                        
                       ..  ..;OWNN0;...   .....  ..                       .......                                                                     
                          . ,ONXXXXd. ...   ...                               ............                                                            
                       .   .xNX000Kk;. ..                                        ..';:;,....                                                          
                       .. .oXKOOOOOOl. .                                           ..';::,...                                                         
                       . .cKXOOOkkkOx,                                               ..';::;'..                                                       
                        .;0NKOOkkkkOk:. .                                               .';c:'.                                                       
                      . .xNK00OkxxxkOl.                      .......                       .....                                                      
                  .  . .lXXOOOOkxxxxOo.              .....',:ccoodxxdoollc:;,'..              .'..                                                    
                       ;0N0OOOOkxxxxOd.          ..',:clodxkOO0KKKXXXXXNXXXKKK0Oxoc,..         .',.                                                   
                   .  .xNKOOkOkkkxdxOd.       ..,:clodkOO0KKKKXXXXXXXXXNNNXXXNNNNNNX0Oo:.       .,:,.                                                 
                     .lXXOOOkkkkkxdxkx;..    .':cloodxkOO0KKKXXXXXXXXXXXXXXXXXXXXNNNNWWNKx:.      ':,..                                               
                 ... ,0NK00OOkkkxddxkx;     .':lloodxxkOO0KKXXXXXXXXXXXXXXXXXXXXXNNNNWWWWWXk:.    ......                                              
                  . .dNX000OOkkxxdddkx'     ':clolodddkOO0KKKXXXXXXXXKKXXXXXXXXXXNNNNWWWWWWNKx,.    ....                                              
                    ;0NK000OOkxxddddkx.    .;cloooooddxkOO0KKKKKKKXXXXKKKXXXXXXXXNXNNWWWWWWWNXOl.                                                     
                   .dNK0OOOOkkxxdoddkd.   .':lllooooodxxkkO00KKKKKKKXXKKKKXXXXXXXXXNNNWWWWWNNNNKx:.                                                   
                   ;KNOOOOOOkkxddoddko.  ..;cllllooodxxkkkkO00000KKKKKXXKXXXXXXXXNNNNNNWWWNNNXNXKOo,.....                                             
                  .dNKOkOOkkxxxdddddkl.  .';clllooddxxkkO000000000KKKKKXXXXXXXXXXXXXNNNNWNNNNNNXK0kdc;''...                                           
                  ;0XOkkkkxxxxxdddddkc.  .':lllooddxxxkOO000KKKK00KKKKKKKKKKXXXXNNNNNWWWWWWWNNNNX0kddo:;;....                                         
                 .oXKkxxxxdxxxdooooxx:   .;ccccllllclodxxkkkOO00000K00KKKKKKKKKXXXNNNNWWWNWWNNNNXKOxodo:;:,...                                        
                 'ONOxxkkxxdddoooooxx,  .;cccc:,.........',;:loxkO000000000000000000KKXKK00O0XNXXX0kollc;:c:''.                                       
                .cXKxdddxxxddooolloxd' .;llcc;................,:codxkkkkkOkxxdolcc::::::cldoox0XXXX0xc:;;;clc;,.                                      
                .kNOdooooddoooollloxo. .colc;'.,;:cloolc:,'..'',;:codxkkkkxdol:;:::;::cldk00OxdOXXXXkc,.,::ll,',.                                     
                :KXkdooloooolllllloxc..:lll:,',:cclldxkkOkdc,..',:coxkkO000OOxdoooodxO0KKXXKKKOOKXXN0:...';lo, ...                                    
               .dN0xdoooooolllllllod;.'lolc:,,,;;;:cldddxkkko,..,;cdkO0KKKK0Oxdlccldxk0KXXXKKKK00KXNXl.  .;cl:. ...                                   
               ,0Nkdddoooolllccllloo'.;olcc;,,,''.',:looooooc'..,:cdOKXNNXK0kl;,,;;:coxk0KKK00000KXXXx.  .;:;;.   ..                                  
              .oNKdlloooollllcccccll..:llcc:,'..   .....,,,'. .';cldOXNNNNK0x:.....';:loxOOkkO000KXXXO,  .''.''.  ...                                 
              'ONkolllooolcccccc:cl:..:ccccc:,...   ....,c;...;clllxOKXNNNXXKx;.. ..  ...,;:cdk0KKXXX0c.  ......   ...                                
              cXXxllllllllccccc:::l;..:cclloolcc:,;cllodxxdl:cloolldOKXXXXNNX0xlc::;,''';:cccok0KXXXXKl.  ......     ..                               
             .xNOollllllllcccc:::cl, .:clloodddolcloddxxxdoclodolccokKXXXXXNNNX0OkxxdxOO0KKKKKKXNXXXXKo.  ......     ..                               
             ;KKxlllccccccc::::::cc' .;:clloooodxOOO00Okdoodddolcccok0KXXXXXNNWNXKK0O00KKKXXNNXNNXXXX0o. ... .'...    ..                              
            .oN0dllllcccc:::;;;::cc. .,;ccloooooxO00K00Okkxxdlcc::cok0KXXXXXXNNNWNNNXXNNNNNNWNNNXXXXK0c. ... .'....   ..                              
            'OXkollolccc:;;;;;;::c;. .';:clllooodxkOOOkkxxddlc::::coOKXNNXXXXXNNNNNNNNNNWWWWWWNNXXXXKk:. ..........   ...                             
            cXKdloolc::::;;;;;:::c,  .';::ccllllodxxxxxxdddoc::::::lxOKXXXKKKKKKXXXNNNNNWWWWWNNNXXKKKd,.............  .''                             
           .xNkololc:::;;;;;,;;::c'  .',;:ccclllloodddddolc:;;;,''';;cokxxO00K0kOKKXXNNNWWWWNNXXXXKK0o........,'....   .'.                            
           ;KKdccc:::::;;;;,,,;;::.  .',,;::cccllllooooll:;,,,..  ....:dc.';lOOooxOKKXNNNNWNNXXXKKKK0c....'..','.....  .'.                            
           oXOlc:;;::;:;;;,,,;;,::.  .'',;:::ccccclllllc:,,;c;.  ....,oOOl,';dOxcldO0KNNNNNXXXXKKKKKO:....,...'......  .'.                            
          'OKdc:;;;;;;;;;;,,,,,;:,   .'',;:::::::ccccc::;;clll:,;:lododOKKOkO0K0Oxodk0KXNNXXKKKKKKK0k:'...',.''. .     ...                            
          cX0oc:;;;;;;;;;,,,,,,;:'   .',,,;:::::::::c::::cllllllldk0KOdxOKKKKKKKXKOxkOKKXXXXKKKKK000x;......'..       ....                            
         .kXxc::;;;;;;;;;,,,,,,;:.   ..,,,;::::::::::cccllllccccldk0K0kxk0KKKKKXXXXKOO0KKKXKKKKKK000d,.........       ....                            
         ;K0oc:;;::;;;;;,,,,,,,;;.    .',,;;::::::::::ccc:;;::;;,,,;codddxxkk0KKKKXKK000KKKKKKKK0000o.... ....         ...                            
        .dXxlc:;;;;;;;;;,,,,,,,:,     .',,;;::;;;;;;;;;;;,,,'.........,;;;:::ldO0000K00O0KKKKKK0000O:.... ..           ..                             
        ,00oc::;;;;;:;;;,,''',,:'     ..,,,;::;;;:::;,,''....    .............,cdkxxO0OOO00KKK00000x. ... ..           ..                             
        lKkl::;,,;;;;;;,,,'''',;.      .',,;;;;;::::;,'..         ....',....  ...,,:dkOOO00KKK00000c.  .                                              
       .kKoc:;,,,;;;;;,,,,'.'';;.      ..'',;;;:;;:::;'......'',:cclooooooodl::c::,':dO000KKK00000x'                                                  
       :KOlc:;,,,;;;;;;;,''.'';,.       ..'',,,;;;::ll;',;;,',,;coooodxxxxkOOOOOO00o:ok000KK00000Oc.                                                  
      .xKdc:;;;,,;;;;;;;,''''';,         ...'',,;;;::;,,;,,,'..',;:cclddddxkkOO000K0xoxO00000OOOOo.         ..                                        
      ,00o:;,,,,;;;;;;;;,'..',:'          ...''',,,,,,,,,,,''........',,;:looxkO0000OxxkOOOOOOOOd'         ..'...                                     
      oKkc;,,,,;;;;;;;;,''''',;'.          ....''''',,,,,,,,,,,,,,,'',,,,:lodkOOOOOOOOkkOkkkkOkd,      ......'..                                      
     'OKdc;,;;;;;;;;;;,,'..'';;.            ....'''',,,,,,;;:codxkkkkkkkxxkkkOO000OOOOkkkxdoddc'.    ....',;;;,'...                                   
     cKkl:;;;;;:;;;;;;;,'..',:,    .....   ... .....',,,,,,;:ldxkOOOO000KK000000000OOkkkxl'.''.          ..,:;;'...                                   
    .xKdl:;;;;;;;;;;;;,,'.'';c'           ...   .......'''',;:lodxkkO00KKKKKK00000OOkxxo,.               ...........                                  
    ;0Ool:;;;;;;;;;;,,''''',:c.                  ...........',;:clodxkO000KKK0OOOOkkxdl,.                 ....    .                                   
   .o0xolc;;;;;;;;,,'....'',c:.                    ............',;:ccldkOOOOOOOkkxxddo:.                                                              
   'xOdolc:;;:;;;,,,''''.'';l;               ..     ......   ....'',;;:lodxxxddoooddoc.                                                            ...
   ;kxdolc:;:::;;;,,,'''.',:l'               ....     .....       ....',,;:::::clodo:.                                                       ......',;
  .lkdolcc:::::;;;,,,,''',,cc.               ..''.       ...           ....'';:clc:'.                       ....                     .     ...',,;:ccl
  c0K0Okxollc::;;;;;,,,,,,;c;.               ....'..                  ...''',,,''..                         ...                     ...   ..,:ccccccll
  ;OXXXXK000OOkkkxdolcc::;:l,                 ........                 .                  ....              ....            .       ...   .';cccc::::c
  ,OWWWNNNXKK00KK000OOOOOkO0c                   .....                                 ........                ..         ...        ...   ..;:c::;;;;;
 .:0WWWWNNKOdc:;;;,,'''',;oO:                      ....                             .....''''.                 .       .....  .   .....   ..';;;,,,,,;
  .cdkO0Oxc'              ...                        .',;;;;,,,'....               ......',,,......                     .................  ..,,,,,,;::
      ....                                       .....';ldkOOOkxo:'.   ..       .......'',,''',,,,,'.. ..    ......           ....... .''. .',:::::ccl
                                                   .....';ccccc:,......................'''',,,,'''.................         .........  .,,'';:clcccclo
                                                       .............,,.........   .....''''......   .................       .........  .';::cclllllllo
                                                           .       ''           .................. ..................    ............. ..,;:::::cclllo
  .','...                                   ...             .    .'.                  .......'','. .................      ...........   .',;:;;;:ccccl
coxOOOkkOo. ....        ............        ...........          ''              ........''',,,.....................     .......'....   ..';:;,',:::::
O00OOOOOK0:...................'..''..          .................,;..................''''',,,,..  .................... . .. ...........   ..;:;...;::::
kkkxxdooxo. ...................''''''..            ...........';;'......''''''''''''''''',''..   ..................        ...........   ..,:,. .';:::
lcc::;;;'.  ........  ....''...,,','','..            .........:c..........''''''''''''''''.   .    ...............         ...........    .,:,  .';:;;
''''...     ......... .....',..'''',,,,'..           .......  ::............'''''''''''..   ..      .....'......          ............    .';.  .';:;;
           ......  .. ......''....',,,,,,'..          ....''. ..   .......'''''''''''..   ...     ...............          ............   ..,.  .';;;'
           ...'..   .........'....'',,,,,,'....       ....... ;:. .........'''''''...     ..      .............        ................    .'.   ';;,'
          ...''..... ..........'....',,,,,''......      ...'..:c.............''...     ...        .............            .......'''''.   ...   .,,''
xddoolc;...',,..       ........''......'.'''.'........   .....::...............     .....         ..............          .........''''..   .'.  .,,..
KKXXXXXX0kdl:'...     ................. ....'..........   ....,,''..........       ...  .        ............. .          .........''.....  .'.  .,;,'
KXXXXXNXNNXX0d;..............''........ ................   ...    ......           ......          ....''.......           ........'.''...   ... .';,.
0000KKXXXNNNN0d'...............''.....  ...............                          .......         ......''.......             .....','.....   .'.  .;,.
ooodxxkkOO0K00kc...............'''''.. ....  .....   .. ..        ..            ........        ...............           .........,'.......  .'  .',.
...',;::cclodxkxl,.........'''''...''..      ... .......                       .........         ....'.........          .................... .'. .',.
.........',;cldk0d,........'','..........         ......         ..          ..........        ................ ..          .........'....... ...  .;.
oxxoc,.....';:okOd,........'',,'...'......                  .......       .............        ..........';'....           ..........''....... ..  .,.
O0KK00Okdc,'.':c:'........',,,,'',,'......                     ..      .  ............         ................          ..................',..... .,.
OO0K0000K0kl,..............',,,.',,.....                      ...      ...............         ........''.....          ....................''. ....'.


`

const carrieWhite = `

                                                                                                                                                      
                                                             .;'.                                                                                     
                                                              .                                                                                       
                                                                                  .                                                                   
                                                                               .....',.                                                               
                                                                                  ..,::,                                                              
                                                                                    .....                                                             
                                                               ......''''..........    ..                                                             
                                                           ....'',;:::cc:;,,''........                                                                
                                                         ....',,;:cccccccc:;::,'........                                                       '::.   
                                                        ...',;:cccllllllllcccc;,'..........                                                    .;,.   
                                                       ...';cllooooooooodoolllc;,,..........                                                          
                                                     ...';coodddxxxxxxxxxxxxddlc;,'.........                                                          
                                                   ...',;:oxkkkkkkkkkkkOOkOOOkkxdoc;'.......             .                                            
                                                  .,;ldddk0KK00000OOOOOO000000000Oxdoc;'....        ..                                                
                                                .;odoodddkXNXXKKKKKKKKKKKKKKKK0Okdddxdc:;''...       ..                                               
                                               .ckxoc:cllooxKNKkOXXXXXXXXXXXK000Okkxollodl;'....       .                                              
                                               .dOdoxOOkxkOkxd:.'cOKXXXXXXXXXX0dlox00doodxo:'...       .                                              
                                               .dKxdOkl;,cOKd;....'codxkkxddxkdlccokkkxclxxd;.....    ..                                              
                                               .:dl:ldooxxxd;.......',;;:cccldkkOOO00kocclll:......       ..                                          
                                           .    ...cxkxdxkxl,.......',,;;;:clodxxkkkxocc::::;'.. ..    .. ..                                          
                                                ...,;;;:cc;,.....,',;c:::::ccodddodolllcc::;;'..       ...                                            
                                               ..',:::cc:;,,...lOKKkocloooooooddxxxkxxxxoc;;:,.         ..                                            
                                              ..,:ccccc:;;::..oXWWWXKOxodkOOkkkxxkkOOOOkxoccc;..       ....  .                                        
                                              .';cccccccllxxlxKxkNNxcoK0dxKXKK0OOOOOOOOkkxdoc;.       ...... ..                                       
                                              ..;cccllodxxxdlkk:oKX0dlk0xok00KKK00OOOOkkkxxol:.        ....  ..                                       
                                              ..,cllodxxxdlc;;;;cxOkxdolcclox0KKK0000OOkkxdol;.       .....  ..                                       
                                              ..,cloddxxdl:;;,,,cddolccccclooxO0KK0000OOkxdoc,..      ....  ....                                      
                                               .,:lodxxdoccc:ccccloxxdoooodddxO0KKKK000OOxdoc,..      .... ....                                       
                                               .':ldxxxddoooodddxxkO000OkxxxxkOO00KKKK0Okxool;...     .... ..                                         
                                               .';ldxxxxOOxdolc::;;:ccldxxkOO0000000KK0kdllll;.....     ...     ..                                    
                                               ..;codxkkkkolloooddxxkxxkxkO00KKK00000KOdllllc;,....     ....                                          
                                                ':loxkkkkkkO00KXXXXXXXXXXXXXKKK0000000Odolooc::,'...    ...     ...                                   
                                                .:ldkkkkkkOO000KK000KKKKXXKKKK000OOO00Oxxoolc:c,.....  ...                                            
                                        .       .;ldxkkkkkkkkkkkkOOOO00KKKKKKK000OOOOOkkddolll:....... ..                                             
                                            .   .'cddxkkkkxddxkO000000KKKKKKKKKKKKK00Okxddolol,.... .. ...                                            
                                           .    ..'coxxkkkkkOO00KK0KKKKKKKKKKKKKKK00Okxdoolllc... ........                                            
                                         ...       .':odxxkO0KKKXKKKK0000000K000Okxxxolllllc:,.    .... ..                                            
                                         ...         .';:codkOO000OOOkOOOOkkkkkxxdollcccccc:;'.    ....       .                                       
                                         ..          ..',,;:cllodoooddddddoooddddolllclclc:;,..    ... ....  ...                                      
                                                ..    ..',,;,;;::clllooooooodddddoodollodo:;'.    .... .....  ....                                    
                                              .... .  ..'',;;;,,,:olclolcokkxddxxddddoddoc;,'.    ...  ...... ....                                    
                                          ..  ..........'',,::,',;lddxkkddxxddxkxdoodxool;;,..    .... ............                                   
                                          .. ...........''',,,,,,,loloolccoooooxOxooollol:,'.     ... .............                                   
                                          .. ....'...  .'''',,,,,,;:lolc::cclooddll::cc:c;,'.    ... ................                                 
                                          .  ...:c..   .'''',,,,,,;;::;:;:loddoccllclool:,,..    .. .......... ......                                 
                                          .   ..::.    ..'',;;,,,,;ldlcllc;;;;;cllcclooc,,,'.    ................ ...                                 
                                         ..            ..,:c:;;;;;;looddoc:;;:cccc::ccccc:,..   .....................                                 
                                        .               .'coc;,,,,,;;:llclllodl;:ccccoxoll;..    .... ...'.......'..                                  
                                   ...                  .':c;''',;clcloc:cccc:;:::odxxxlcc;....  ........l:..'...'::.                                 
                               ..;;..                   ........',:oxkko::::;,'''',,..................   ';..;c'.',cl;.                               
                              .,;;,.                    ............'''................................    ...;:',:;,'.                               
                                ............    ....................................................,,..        ..':c;,;'.                            
                               ......:c:c;.. ....,'.................................................::,...   .      ..;c:;..                          
                              ...''',c;,;..  .. .''..............................................'....,,'''........  .......                          
                              ...'.....          ...............................................''....',',;,'...........                              
                  ..................                    .....................            .........    ....,:cc:,,.....                                
            ..........';cc:,.......                                                     ..  ......         ..'','.  ..                                
     ..........',''',;:cooxc.....                                 .......................'........                 ........                           
  ........''''';:,'':odc:cc,.                      ......................',,,...''..'...',,.......                ..','''................             
 ......''''';;,,;::::od;','.                  .............'...'',;;;;,',loollc;;;',;,'''''''......              .';:;,,'.....'.....''''.....         
....'''',,;:xd:lddoccol;...                    ........';'',,'';;,:ccc:,;lllllc:c:,,;,,,'..','..... ...          .',,;,,'.',',,'',,,,,''',;,....      
....''',,;coxd::c:,,,,,,..                     ................'''',,,,',;;;;,',;,.',,,,,'..''..........        ..,;,;,''''''',,,,,;::,,,,,'''...     
....''''';:;::;;;;;;,.,;.                       ...................,;;;,,,''',,,'...'''.''..'.........        ....';,,,''''''',,,,,;:;,,,,,,,,'..     
....''',,';:ccccccc;;:c;.     .              ..................,,,',;;:;:::;;:c:,....'...............        .... .:;,,'''''',,,,,,,,,:;,,,,,''...    
......',,;clldxdllddllc'      ...           .........''',..'',:ool;;;;;:cllollcc:,'',,''''........     .........  .,c;,,'''',,',,,,',,;,,,,''''...    
.....',;codocll:;;col:;.    . .....         .......',;;cl:;ccclodl:;;;:clllolllllccc:;,,,,....       ...............:l;,,'''',;;:c;,,,,,,,'''''...    
.....',;::c:,,;,'';llc;.   .........       ..',''.';;;:cllccccclollccccccccllcclcccc::;;;;;'..   ...................;:;;,',;,,c:;;,,,,,,,,'''''...    
.....''';;cc,'',:clool,   .............     .;;'..;ccccccc::::clloooolllcc::::::::::;',;:;'.  ......................,;,,,;cc;,;:;;;;;,,,,,'''''....   
.....''',:doc:coxdolc,.   ...............    ....';:::::cc:::clooooddoolcc::;;;;;;;,..','...........................,;,;;:cc:;,,:;;;,,,,,'''''''...   
.....''',clloxxdoo;..     .................   ...';;:cc:ccccclodxxxxxdollcc::;,,,'''.............................'''':;;:::ll:;,;;,,,,,,,''''''''..   
.....''',:lloddol;.       ...................   ..,;clllllloooodxkkxxoolllc:::,''................................',,',;;;:;ccc::c::;,,,,,,',,''''..   
.....''',;:cl:cc;.        .............    ........':looddxxxxxxxxxxdxddolc:c:...................................',,'.,;;:::clc:c:l:,,,,,''''''''..   
 ......'',,,:;;:,.        .............     .......':odxddxxxxxxxkxdoc:;,'......................................'',,'.,:::c:::;;::c:,,,,,,,,''''''.   
 ......'',,',,,;.         ..........................'cdxdddxxxdxxxo;...      ..''..............................'',;;'.,llc::;,,,,;cc,',,,,,,,''''..   

`

module.exports = {
    intro: intro,
    freddy: freddyKrueger,
    jason: jasonVoorhees,
    norman: normanBates,
    hannibal: hannibalLecter,
    annie: annieWilkes,
    carrie: carrieWhite
}