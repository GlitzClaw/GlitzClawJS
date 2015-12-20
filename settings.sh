!bin/bash
# menu outline by Dennis Williamson" 
# http://askubuntu.com/questions/1705/how-can-i-create-a-select-menu-in-a-shell-script
PS3='Please enter your choice: '
options=("Remove CSS" "Remove index.html" "Remove JS" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Remove CSS")
            rm -fr css
            ;;
        "Remove index.html")
            rm -fr index.html
            ;;
        "Remove JS")
            rm -fr js
            ;;
        "Quit")
            break
            ;;
        *) echo invalid option;;
    esac
done
