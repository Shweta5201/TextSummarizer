
Tensor Flow version: tensorflow 1.0
python version: python 2.7.10
pyrouge: pyrouge 0.1.0


PreProcessing the CNN data:

Tokenize it using Stanford NLP parser. It basically removes all the special characeters and converts the letter into smaller case.
Then each sentence is split into token and this stream of tokens is encoded in binary.
The CNN data stories can be downloaded from here.
Then download the Stanford NLP parser from here and add following command to your bash 
export CLASSPATH=/path/to/stanford-corenlp-full-2016-10-31/stanford-corenlp-3.7.0.jar

run this command: python make_datafiles.py /path/to/cnn/stories 
This will create the bin files for execution. These preprocessed files can also be downloaded from here.


Running the code:

Store the data and the code in the same folder. To run  use the following. 

python run_summarization.py --mode=train --data_path=./finished_files/chunked/train_* --vocab_path=./finished_files/vocab --log_root=./ --exp_name=Experiment

python run_summarization.py --mode=eval --data_path=./finished_files/chunked/val_* --vocab_path=./finished_files/vocab --log_root=./ --exp_name=Experiment

python run_summarization.py --mode=decode --data_path=./finished_files/chunked/val_* --vocab_path=./finished_files/vocab --log_root=./ --exp_name=Experiment


there are three way you can run the program. 
1. Train
2. Decode
3. Eval 

