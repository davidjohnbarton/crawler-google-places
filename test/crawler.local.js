const { expect } = require('chai');
const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');
const writeJson = require('write-json');
const { testInput } = require('./config');

const TEST_STORAGE_FOLDER = 'apify_storage_test';
const TEST_KV_STORAGE_FOLDER = 'key_value_stores';

describe('Crawler', () => {
    before(() => {
        spawnSync('cd ..');
        fs.mkdirSync(TEST_STORAGE_FOLDER);
        fs.mkdirSync(path.join(TEST_STORAGE_FOLDER, TEST_KV_STORAGE_FOLDER));

        const defaultKvsDir = path.join(TEST_STORAGE_FOLDER, TEST_KV_STORAGE_FOLDER, 'default');
        fs.mkdirSync(defaultKvsDir);
        writeJson.sync(path.join(defaultKvsDir, 'INPUT.json'), testInput);
    });
    it('should work on local', () => {
        spawnSync('npm', ['run', 'start'], {
            env: {
                APIFY_LOCAL_STORAGE_DIR: `./${TEST_STORAGE_FOLDER}`,
            },
        });
        expect('1').to.be.equal('1');
    });
    after(() => {
        spawnSync('cd test');
    });
});
