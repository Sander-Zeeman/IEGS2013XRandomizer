#!/bin/bash
cd ..
. ~/envs/node.env
npm run build
rm -rf docs/
mv dist/ docs/
