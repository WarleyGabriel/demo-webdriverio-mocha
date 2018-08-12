#! /bin/sh

set -e

cd allure-logs &&
allure open allure-report $@
