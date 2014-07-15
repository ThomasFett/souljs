TARGET=dist/soul.js

# find, in the 'src' directory, all the files with a name ending in .js
SRC_FILES=$(shell find src -type f -name "*.js")

BUILD_OPTIONS=build/build.js
RJS=node_modules/.bin/r.js

all: build

build: $(TARGET)

clean:
	rm -rf $(TARGET) node_modules

$(TARGET): $(RJS) $(SRC_FILES)
	$(RJS) -o $(BUILD_OPTIONS) out=$(TARGET)

$(RJS):
	npm install