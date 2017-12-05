This script produces the data set by processing the CNN stories into tokenized version and then writing it into the binary format. Code ins written in python 2. 

Steps for running:
1. You can download CNN stories from this link.
2. Then download the PTBTokenizer from Stanford NLP package.
3. Set the class path to where you have saved the Stanford CoreNLP package.
4. Use this command to run the script. 
python make_datafiles.py /path/to/cnn/stories 

output generated:
  cnn_stories_tokenized , train.bin, val.bin, test.bin this will be placed in finished file. A vocab file is built from the training data and is placed in finished files.

