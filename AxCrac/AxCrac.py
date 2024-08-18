import requests
import json
import urllib.request
import argparse
import subprocess

parser = argparse.ArgumentParser()
parser.add_argument("-f", "--file", dest="file", help="Use specific local file, instead of downloading latest from Modrinth")
args = parser.parse_args()

fileName = args.file

if args.file is None:
    modURL = json.loads(requests.get("https://api.modrinth.com/v2/project/N6n5dqoA/version").text)[0]["files"][0]["url"] # Project ID is used instead of name, so in the future if the name leads elsewhere, it will error out
    print("Downloading latest axiom at " + modURL + " as axiom.jar (use AxCrac -f <filename> to use a local file instead)")
    urllib.request.urlretrieve(modURL, "axiom.jar")
    fileName = "axiom.jar"

recaf = open(r"script.recaf", "w+")

recaf.write("loadworkspace "+fileName+"\n")
recaf.write()