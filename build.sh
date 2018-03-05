em++ 	-s WASM=1 multiply.cpp -o multiply.js \
	-s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall"]' \
	-s EXPORTED_FUNCTIONS='["_main", "_multiply"]'
