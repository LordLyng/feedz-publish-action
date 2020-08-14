wget -O feedz.tgz https://f.feedz.io/feedz-io/public/packages/Feedz.Console.linux/latet/download
mkdir Feedz
tar zxvf feedz.tgz -C ./Feedz
cd Feedz
export PATH=$pwd:$PATH
source ~/.bashrc
cd ..