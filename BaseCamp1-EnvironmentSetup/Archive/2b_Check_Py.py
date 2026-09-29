import sys
import platform
import os


def check_python():
    version = sys.version_info

    print("Python Environment Check")
    print("-" * 30)

    print(f"Python version : {version.major}.{version.minor}.{version.micro}")
    print(f"Executable     : {sys.executable}")
    print(f"Operating system: {platform.system()}")
    print(f"Machine        : {platform.machine()}")
    print(f"Current folder : {os.getcwd()}")

    if version.major == 3 and version.minor >= 12:
        print("Python version : OK")
    else:
        print("Python version : Please use Python 3.12 or later")


check_python()