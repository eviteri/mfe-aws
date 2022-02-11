set -e
echo '>>>>>>>>>>>>>>>'
echo '>>>>>>>>>>>>>>>'
echo 'checking for webpack_modules'
echo '>>>>>>>>>>>>>>>'
if [[ -n $(find . -name 'webpack_modules' -not -path "./node_modules/*") ]]
then
    echo '>>>>>>>>>>>>>>>found:'
    echo 'removing existing node_modules....'
    rm -rf node_modules
    echo '>>>>>>>>>>>>>>>removed existing node_modules'
    mv -v webpack_modules/node_modules node_modules
    echo '>>>>>>>>>>>>>>>successfully moved content of "webpack_modules/node_modules" to "node_modules"'
    rm -rf webpack_modules
    echo '>>>>>>>>>>>>>>>removed webpack_modules'
else
    echo '>>>>>>>>>>>>>>>found none'
fi